import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TrainsModule } from './trains/trains.module';

@Module({
  imports: [AuthModule, TrainsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
