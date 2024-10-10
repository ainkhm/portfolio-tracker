export interface Company {
  id: number;
  name: string;
  industry: string;
}

export interface Investment {
  id: number;
  companyId: number;
  amountInvested: number;
  valuation: number;
  date: string;
  roundType: string;
  company: Company;
}

export interface PortfolioSummary {
  totalInvested: number;
  totalCurrentValue: number;
  roi: number;
}
