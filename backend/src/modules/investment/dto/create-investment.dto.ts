export class CreateInvestmentDto {
  companyId: number;
  amountInvested: number;
  valuation: number;
  date: Date;
  roundType: string;
}
