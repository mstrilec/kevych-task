import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTrainDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  departure_time: string;

  @IsString()
  @IsNotEmpty()
  arrival_time: string;

  @IsString()
  @IsNotEmpty()
  destination: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}
