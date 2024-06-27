"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

export const Roadmap = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const pathRef = useRef<SVGPathElement | null>(null);

  const progressX = useMotionValue(0);
  const progressY = useMotionValue(0);

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
    <div className="min-h-[300vh]" ref={ref}>
      <svg className="w-full h-full" viewBox="0 0 600 1200">
        <motion.path
          ref={pathRef}
          fill={"currentColor"}
          stroke={"currentColor"}
          d="M -5,0
          Q 450 230 300 450 
          T 130 750
          Q 100 850 300 1000
          T 150 1200"
          style={{ pathLength: scrollYProgress, fillOpacity: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
          }}
        />
        <motion.circle
          r="20"
          cx={progressX}
          cy={progressY}
          fill={"currentColor"}
          style={{
            // translateX: scrollXProgress,
            // translateY: scrollYProgress,
            pathLength: scrollYProgress,
          }}
        ></motion.circle>
      </svg>
    </div>
  );
};
