"use client";

import React, { useContext, useState, useEffect } from "react";
import { PortfolioContext } from "@/context/PortfolioContext";
import Pagination from "@/components/Pagination";


const CompaniesList: React.FC = () => {
  const portfolioContext = useContext(PortfolioContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const listOfCompanies = portfolioContext?.companies || [];
  const totalPages = Math.ceil(listOfCompanies.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCompanies = listOfCompanies.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  if (!portfolioContext) {
    return <div>Loading companies...</div>;
  }

  const { companies } = portfolioContext;

  if (companies.length === 0) {
    return <div>No companies found.</div>;
  }

  return (
    <>
      <ul className='space-y-4'>
        {currentCompanies.map((company) => (
          <li
            key={company.id}
            className='border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow max-w-[20%]'
          >
            {company.name} - Industry: {company.industry}
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalItems={companies.length}
        onPageChange={(page) => setCurrentPage(page)}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};

export default CompaniesList;
