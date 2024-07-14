"use client";
import { PreLoader } from "@/components";
import React, { ReactNode, createContext, useState } from "react";

type LoaderContext = {
  showLoader: () => void;
  hideLoader: () => void;
};

type LoaderContextProvider = {
  children: ReactNode;
};

export const LoaderContext = createContext<LoaderContext | undefined>(
  undefined
);

export const LoaderProvider: React.FC<LoaderContextProvider> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const contextValue: LoaderContext = {
    showLoader: () => {
      setIsVisible(true);
    },
    hideLoader: () => {
      setIsVisible(false);
    },
  };

  return (
    <LoaderContext.Provider value={contextValue}>
      {isVisible && <PreLoader />}
      {children}
    </LoaderContext.Provider>
  );
};
