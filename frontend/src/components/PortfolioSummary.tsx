"use client";

import React, { useContext } from "react";
import { PortfolioContext } from "@/context/PortfolioContext";

const PortfolioSummary: React.FC = () => {
  const portfolioContext = useContext(PortfolioContext);

  if (!portfolioContext) {
    return <div>Loading portfolio summary...</div>;
  }

  const { summary } = portfolioContext;

  if (!summary) {
    return <div>No summary data available.</div>;
  }

  return (
    <div>
      <h2 className='text-xl font-bold mb-2'>Portfolio Summary</h2>
      <p>Total Invested: ${summary.totalInvested.toFixed(2)}</p>
      <p>Total Current Value: ${summary.totalCurrentValue.toFixed(2)}</p>
      <p>ROI: {summary.roi.toFixed(2)}%</p>
    </div>
  );
};

export default PortfolioSummary;
