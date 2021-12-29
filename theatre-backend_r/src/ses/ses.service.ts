import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { query } from 'express';
import { Repository } from 'typeorm';
import { CreateSeInput } from './dto/create-se.input';
import { UpdateSeInput } from './dto/update-se.input';
import { Se } from './entities/se.entity';

@Injectable()
export class SesService {
  constructor(@InjectRepository(Se) private seRepository: Repository<Se>) {}

  create(createSeInput: CreateSeInput) {
    return 'This action adds a new se';
  }

  async findAll() {
    return await this.seRepository.find();
  }

  async findOne(id: number) {
    return await this.seRepository.findOne(id);
    // return await this.seRepository.find({
    //   where: { id: id },
    // });
  }

  update(id: number, updateSeInput: UpdateSeInput) {
    return `This action updates a #${id} se`;
  }

  remove(id: number) {
    return `This action removes a #${id} se`;
  }
}
