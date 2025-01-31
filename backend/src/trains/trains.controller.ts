import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';
import { TrainsService } from './trains.service';

@Controller('trains')
export class TrainsController {
  constructor(private readonly trainsService: TrainsService) {}

  @Post()
  create(@Body() createTrainDto: CreateTrainDto) {
    return this.trainsService.create(createTrainDto);
  }

  @Get()
  findAll() {
    return this.trainsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTrainDto: UpdateTrainDto) {
    return this.trainsService.update(+id, updateTrainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainsService.remove(+id);
  }

  @Get('search')
  search(@Query('query') query: string) {
    return this.trainsService.search(query);
  }

  @Get('sort')
  sortBy(@Query('field') field: string, @Query('order') order: 'asc' | 'desc') {
    return this.trainsService.sortBy(field, order);
  }
}
