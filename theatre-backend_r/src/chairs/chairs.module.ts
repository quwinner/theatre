import { Module } from '@nestjs/common';
import { ChairsService } from './chairs.service';
import { ChairsResolver } from './chairs.resolver';
import { Chair } from './entities/chair.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Chair])],
  providers: [ChairsResolver, ChairsService],
})
export class ChairsModule {}
