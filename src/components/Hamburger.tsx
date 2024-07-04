"use client";
import { motion, useAnimation } from "framer-motion";
import { FC, useEffect, useState } from "react";

const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" },
};

const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" },
};

type HamburgerProps = {
  isClicked: boolean;
};
export const Hamburger: FC<HamburgerProps> = ({ isClicked }) => {
  const [isOpen, setOpen] = useState(isClicked);
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

  useEffect(() => {
    const click = async () => {
      setOpen(!isClicked);
      if (isOpen) {
        await path02Controls.start(path02Variants.moving);
        path01Controls.start(path01Variants.open);
        path02Controls.start(path02Variants.open);
      } else {
        path01Controls.start(path01Variants.closed);
        await path02Controls.start(path02Variants.moving);
        path02Controls.start(path02Variants.closed);
      }
    };

    click();
  }, [isClicked, isOpen, path01Controls, path02Controls]);

  return (
    <div>
      <svg width="42" height="42" viewBox="0 0 24 24">
        <motion.path
          {...path01Variants.closed}
          animate={path01Controls}
          transition={{ duration: 0.2 }}
          stroke="#FFFFFF"
        />
        <motion.path
          {...path02Variants.closed}
          animate={path02Controls}
          transition={{ duration: 0.2 }}
          stroke="#FFFFFF"
        />
      </svg>
    </div>
  );
};
