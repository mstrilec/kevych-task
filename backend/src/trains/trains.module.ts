import { Module } from '@nestjs/common';
import { TrainsController } from './trains.controller';
import { TrainsService } from './trains.service';
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [TrainsController],
  providers: [TrainsService, PrismaService]
})
export class TrainsModule {}
