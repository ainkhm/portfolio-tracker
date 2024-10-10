import React from "react";
import Layout from "@/components/Layout";
import InvestmentsList from "@/components/InvestmentsList";
import AddInvestmentForm from "@/components/AddInvestmentForm";

const InvestmentsPage: React.FC = () => {
  return (
    <Layout>
      <h1 className='text-2xl font-bold mb-4'>Investments</h1>
      <AddInvestmentForm />
      <InvestmentsList />
    </Layout>
  );
};

export default InvestmentsPage;
