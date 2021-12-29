import { Module } from '@nestjs/common';
import { SesService } from './ses.service';
import { SesResolver } from './ses.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Se } from './entities/se.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Se])],
  providers: [SesResolver, SesService],
})
export class SesModule {}
