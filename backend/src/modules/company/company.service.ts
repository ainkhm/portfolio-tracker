import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateCompanyDto) {
    return this.prisma.company.create({ data });
  }

  findAll() {
    return this.prisma.company.findMany();
  }

  findOne(id: number) {
    return this.prisma.company.findUnique({ where: { id } });
  }
}
