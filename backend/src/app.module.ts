import { Module } from '@nestjs/common';
import { CompanyModule } from './modules/company/company.module';
import { InvestmentModule } from './modules/investment/investment.module';

@Module({
  imports: [CompanyModule, InvestmentModule],
})
export class AppModule {}
