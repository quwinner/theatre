import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChairInput } from './dto/create-chair.input';
import { UpdateChairInput } from './dto/update-chair.input';
import { Chair } from './entities/chair.entity';

@Injectable()
export class ChairsService {
  constructor(
    @InjectRepository(Chair) private seRepository: Repository<Chair>,
  ) {}

  async create(input: CreateChairInput) {
    const chair = await this.seRepository.create({
      number: input.number,
      seId: input.seId,
      userId: input.userId,
    });
    return await this.seRepository.save(chair);
  }

  findAll() {
    return `This action returns all chairs`;
  }

  async findAllInOneSes(seId: number) {
    return await this.seRepository.find({ where: { seId: seId } });
  }

  findOne(id: number) {
    return `This action returns a #${id} chair`;
  }

  update(id: number, updateChairInput: UpdateChairInput) {
    return `This action updates a #${id} chair`;
  }

  remove(id: number) {
    return `This action removes a #${id} chair`;
  }
}
