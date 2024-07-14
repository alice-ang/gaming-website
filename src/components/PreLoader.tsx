"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import Image from "next/image";

type PreLoaderProps = {
  isLoading?: boolean;
};

export const PreLoader: FC<PreLoaderProps> = ({ isLoading = true }) => {
  const [loading, setLoading] = useState<boolean>(isLoading);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <AnimatePresence mode="sync">
      {loading && (
        <motion.div
          className="min-h-screen bg-palette-footer fixed h-screen w-screen z-50 items-center justify-center flex flex-col"
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <div className="bg-white h-14 w-14 rounded-full animate-bounce" />
          {/* <Image
            src={"/border.png"}
            alt={"golf ball logo"}
            height={60}
            width={60}
            className="animate-bounce"
          /> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
