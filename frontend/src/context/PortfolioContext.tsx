"use client";

import React, { createContext, useState, useEffect } from "react";
import { Investment, Company, PortfolioSummary } from "@/utils/interfaces";
import api from "@/utils/api";

interface InvestmentInput {
  companyId: number;
  amountInvested: number;
  valuation: number;
  date: Date;
  roundType: string;
}

interface CompanyInput {
  name: string;
  industry: string;
}

interface PortfolioContextInterface {
  investments: Investment[];
  companies: Company[];
  summary: PortfolioSummary | null;
  addInvestment: (investment: InvestmentInput) => Promise<void>;
  addCompany: (company: CompanyInput) => Promise<void>;
  refreshData: () => Promise<void>;
}

export const PortfolioContext = createContext<PortfolioContextInterface | null>(
  null
);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [summary, setSummary] = useState<PortfolioSummary | null>(null);

  const fetchInvestments = async () => {
    try {
      const response = await api.get<Investment[]>("/investments");
      setInvestments(response.data);
    } catch (error) {
      console.error("Error fetching investments:", error);
    }
  };

  const fetchCompanies = async () => {
    try {
      const response = await api.get<Company[]>("/companies");
      setCompanies(response.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  const fetchSummary = async () => {
    try {
      const response = await api.get<PortfolioSummary>("/investments/summary");
      setSummary(response.data);
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  };

  const refreshData = async () => {
    await Promise.all([fetchInvestments(), fetchCompanies(), fetchSummary()]);
  };

  useEffect(() => {
    refreshData();
  }, []);

  const addInvestment = async (investment: InvestmentInput) => {
    try {
      await api.post("/investments", {
        ...investment,
        date: investment.date.toISOString(),
      });
      await fetchInvestments();
      await fetchSummary();
    } catch (error) {
      console.error("Error adding investment:", error);
    }
  };

  const addCompany = async (company: CompanyInput) => {
    try {
      await api.post("/companies", company);
      await fetchCompanies();
    } catch (error) {
      console.error("Error adding company:", error);
    }
  };

  const contextValue: PortfolioContextInterface = {
    investments,
    companies,
    summary,
    addInvestment,
    addCompany,
    refreshData,
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  );
};
