"use client";
import React, { FC, useEffect, useRef } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { storyblokEditable } from "@storyblok/react/rsc";

export const GolfPath: FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const pathRef = useRef<SVGPathElement | null>(null);

  const progressX = useMotionValue(0);
  const progressY = useMotionValue(0);
  const opacity = useTransform(scrollYProgress, [0, 0.01], [0, 1]);

  useEffect(() => {
    const pathElement = pathRef.current;
    const totalPathLength = pathElement?.getTotalLength() ?? 0;
    const initialProgress = scrollYProgress.get();

    const initialCoords = pathElement?.getPointAtLength(
      initialProgress * totalPathLength
    );

    progressX.set(initialCoords?.x ?? 0);
    progressY.set(initialCoords?.y ?? 0);

    const unsubscribe = scrollYProgress.on("change", (latestPercent) => {
      const latestPathProgress = pathElement?.getPointAtLength(
        latestPercent * totalPathLength
      );

      progressX.set(latestPathProgress?.x ?? 0);
      progressY.set(latestPathProgress?.y ?? 0);
    });

    return unsubscribe;
  }, [progressX, progressY, scrollYProgress]);

  return (
    <div ref={ref}>
      <svg viewBox="0 0 600 1200">
        <motion.path
          ref={pathRef}
          fill={"none"}
          stroke={"#898889"}
          d="M -5,0
          Q 450 230 300 450 
          T 130 750
          Q 100 850 300 1000
          T 150 1200"
          strokeWidth={1}
          strokeDasharray={10}
          style={{
            pathLength: scrollYProgress,
            fillOpacity: 0,
            strokeLinejoin: "round",
            fillRule: "evenodd",
          }}
        />
        <path
          fill={"#06141d"}
          stroke={"#06141d"}
          d="M -5,0
          Q 450 230 300 450 
          T 130 750
          Q 100 850 300 1000
          T 150 1200"
          strokeWidth={2}
          strokeDasharray={10}
          style={{
            fillOpacity: 0,
            strokeLinejoin: "round",
            fillRule: "evenodd",
          }}
        />
        <motion.circle
          r="5"
          cx={progressX}
          cy={progressY}
          fill={"currentColor"}
          style={{
            opacity,
          }}
        ></motion.circle>
      </svg>
    </div>
  );
};
