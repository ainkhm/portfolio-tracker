"use client";

import React, { useContext, useState, useEffect } from "react";
import { PortfolioContext } from "@/context/PortfolioContext";
import Pagination from "@/components/Pagination";

const InvestmentsList: React.FC = () => {
  const portfolioContext = useContext(PortfolioContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const investments = portfolioContext?.investments || [];

  const totalPages = Math.ceil(investments.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInvestments = investments.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  if (!portfolioContext) {
    return <div>loading investments...</div>;
  }

  if (investments.length === 0) {
    return <div>Investments not found.</div>;
  }

  const roundTypeColors: { [key: string]: string } = {
    Seed: "text-green-600",
    A: "text-blue-600",
    B: "text-indigo-600",
    C: "text-orange-600",
    D: "text-gray-600",
    E: "text-pink-600",
    IPO: "text-yellow-600",
  };

  return (
    <>
      <ul className='flex flex-wrap -mx-2'>
        {currentInvestments.map((investment) => {
          const roundTypeClass =
            roundTypeColors[investment.roundType] ||
            "bg-gray-200 text-gray-800";
          return (
            <li
              key={investment.id}
              className='border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow max-w-full sm:max-w-[45%] md:max-w-[30%] lg:max-w-[20%] mx-2 mb-4'
            >
              <div className='flex items-center justify-between'>
                <h3 className='text-lg font-semibold text-gray-800'>
                  {investment.company.name}
                </h3>
                <span className='text-sm text-gray-500'>
                  {new Date(investment.date).toLocaleDateString()}
                </span>
              </div>
              <div className='mt-2 text-gray-700'>
                <p>
                  Invested:{" "}
                  <span className='font-medium'>
                    ${investment.amountInvested.toLocaleString()}
                  </span>
                </p>
                <p>
                  Valuation:{" "}
                  <span className='font-medium'>
                    ${investment.valuation.toLocaleString()}
                  </span>
                </p>
                <p>
                  Round type:{" "}
                  <span
                    className={`font-medium px-2 py-1 rounded ${roundTypeClass}`}
                  >
                    {investment.roundType}
                  </span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalItems={investments.length}
        onPageChange={(page) => setCurrentPage(page)}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};

export default InvestmentsList;
