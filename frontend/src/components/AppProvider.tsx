"use client";

import React from "react";
import { PortfolioProvider } from "@/context/PortfolioContext";
import { ErrorBoundary } from "./ErrorBoundary";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ErrorBoundary
      fallback={<div>Oops! Something went wrong. Please try again later.</div>}
    >
      <PortfolioProvider>{children}</PortfolioProvider>
    </ErrorBoundary>
  );
};

export default AppProvider;
