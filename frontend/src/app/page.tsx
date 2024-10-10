import React from "react";
import Layout from "@/components/Layout";
import PortfolioSummary from "@/components/PortfolioSummary";
import CompaniesList from "@/components/CompaniesList";
import InvestmentsList from "@/components/InvestmentsList";
import AddCompanyForm from "@/components/AddCompanyForm";
import AddInvestmentForm from "@/components/AddInvestmentForm";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <h1 className='text-2xl font-bold mb-4'>Portfolio Tracker</h1>
      <PortfolioSummary />
      <div className='mt-8'>
        <h2 className='text-xl font-bold mb-4'>Companies</h2>
        <AddCompanyForm />
        <CompaniesList />
      </div>
      <div className='mt-8'>
        <h2 className='text-xl font-bold mb-4'>Investments</h2>
        <AddInvestmentForm />
        <InvestmentsList />
      </div>
    </Layout>
  );
};

export default HomePage;
