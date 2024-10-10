"use client";

import React, { useState, useContext } from "react";
import { PortfolioContext } from "@/context/PortfolioContext";

const AddCompanyForm: React.FC = () => {
  const portfolioContext = useContext(PortfolioContext);
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");

  if (!portfolioContext) {
    return null;
  }

  const { addCompany } = portfolioContext;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addCompany({ name, industry });
    setName("");
    setIndustry("");
  };

  return (
    <form onSubmit={handleSubmit} className='mb-4'>
      <input
        className='border p-2 mr-2'
        placeholder='Company Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className='border p-2 mr-2'
        placeholder='Industry'
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        required
      />
      <button className='bg-blue-500 text-white p-2' type='submit'>
        Add Company
      </button>
    </form>
  );
};

export default AddCompanyForm;
