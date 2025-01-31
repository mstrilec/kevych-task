import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';

@Injectable()
export class TrainsService {
  constructor(private prisma: PrismaService) {}

  async create(createTrainDto: CreateTrainDto) {
    return this.prisma.train.create({
      data: createTrainDto,
    });
  }

  async findAll() {
    return this.prisma.train.findMany();
  }

  async findOne(id: number) {
    const train = await this.prisma.train.findUnique({
      where: { id },
    });
    if (!train) {
      throw new NotFoundException(`Train with ID ${id} not found`);
    }
    return train;
  }

  async update(id: number, updateTrainDto: UpdateTrainDto) {
    const train = await this.prisma.train.findUnique({
      where: { id },
    });
    if (!train) {
      throw new NotFoundException(`Train with ID ${id} not found`);
    }
    return this.prisma.train.update({
      where: { id },
      data: updateTrainDto,
    });
  }

  async remove(id: number) {
    const train = await this.prisma.train.findUnique({
      where: { id },
    });
    if (!train) {
      throw new NotFoundException(`Train with ID ${id} not found`);
    }
    return this.prisma.train.delete({
      where: { id },
    });
  }

  async search(query: string) {
    return this.prisma.train.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { destination: { contains: query, mode: 'insensitive' } },
        ],
      },
    });
  }

  async sortBy(field: string, order: 'asc' | 'desc') {
    return this.prisma.train.findMany({
      orderBy: {
        [field]: order,
      },
    });
  }
}
