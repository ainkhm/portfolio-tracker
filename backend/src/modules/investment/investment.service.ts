import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateInvestmentDto } from './dto/create-investment.dto';

@Injectable()
export class InvestmentService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateInvestmentDto) {
    return this.prisma.investment.create({ data });
  }

  findAll() {
    return this.prisma.investment.findMany({
      include: { company: true },
    });
  }

  async getPortfolioSummary() {
    const investments = await this.prisma.investment.findMany();

    const totalInvested = investments.reduce(
      (sum, inv) => sum + inv.amountInvested,
      0,
    );
    const totalCurrentValue = investments.reduce(
      (sum, inv) => sum + inv.valuation,
      0,
    );
    const roi = ((totalCurrentValue - totalInvested) / totalInvested) * 100;

    return {
      totalInvested,
      totalCurrentValue,
      roi,
    };
  }
}
