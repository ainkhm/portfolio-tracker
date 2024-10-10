import React from "react";
import Layout from "@/components/Layout";
import CompaniesList from "@/components/CompaniesList";
import AddCompanyForm from "@/components/AddCompanyForm";

const CompaniesPage: React.FC = () => {
  return (
    <Layout>
      <h1 className='text-2xl font-bold mb-4'>Companies</h1>
      <AddCompanyForm />
      <CompaniesList />
    </Layout>
  );
};

export default CompaniesPage;
