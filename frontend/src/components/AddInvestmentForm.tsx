"use client";

import React, { useState, useContext } from "react";
import { PortfolioContext } from "@/context/PortfolioContext";

const AddInvestmentForm: React.FC = () => {
  const portfolioContext = useContext(PortfolioContext);
  const [companyId, setCompanyId] = useState<number | "">("");
  const [amountInvested, setAmountInvested] = useState<number | "">("");
  const [valuation, setValuation] = useState<number | "">("");
  const [date, setDate] = useState<string>("");
  const [roundType, setRoundType] = useState<string>("");

  if (!portfolioContext) {
    return null;
  }

  const { companies, addInvestment } = portfolioContext;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addInvestment({
      companyId: Number(companyId),
      amountInvested: Number(amountInvested),
      valuation: Number(valuation),
      date: new Date(date),
      roundType,
    });
    setCompanyId("");
    setAmountInvested("");
    setValuation("");
    setDate("");
    setRoundType("");
  };

  return (
    <form onSubmit={handleSubmit} className='mb-4'>
      <select
        className='border p-2 mr-2'
        value={companyId}
        onChange={(e) => setCompanyId(Number(e.target.value))}
        required
      >
        <option value=''>Select Company</option>
        {companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
      <input
        className='border p-2 mr-2'
        placeholder='Amount Invested'
        type='number'
        value={amountInvested}
        onChange={(e) => setAmountInvested(Number(e.target.value))}
        required
      />
      <input
        className='border p-2 mr-2'
        placeholder='Valuation'
        type='number'
        value={valuation}
        onChange={(e) => setAmountInvested(Number(e.target.value))}
        required
      />
      <input
        className='border p-2 mr-2'
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        className='border p-2 mr-2'
        placeholder='Round Type'
        value={roundType}
        onChange={(e) => setRoundType(e.target.value)}
        required
      />
      <button className='bg-blue-500 text-white p-2' type='submit'>
        Add Investment
      </button>
    </form>
  );
};

export default AddInvestmentForm;
