import { Controller, Get, Post, Body } from '@nestjs/common';
import { InvestmentService } from './investment.service';
import { CreateInvestmentDto } from './dto/create-investment.dto';

@Controller('investments')
export class InvestmentController {
  constructor(private readonly investmentService: InvestmentService) {}

  @Post()
  create(@Body() createInvestmentDto: CreateInvestmentDto) {
    return this.investmentService.create(createInvestmentDto);
  }

  @Get()
  findAll() {
    return this.investmentService.findAll();
  }

  @Get('summary')
  getSummary() {
    return this.investmentService.getPortfolioSummary();
  }
}
