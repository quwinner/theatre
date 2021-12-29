import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SesService } from './ses.service';
import { Se } from './entities/se.entity';
import { CreateSeInput } from './dto/create-se.input';
import { UpdateSeInput } from './dto/update-se.input';

@Resolver(() => Se)
export class SesResolver {
  constructor(private readonly sesService: SesService) {}

  @Mutation(() => Se)
  createSe(@Args('createSeInput') createSeInput: CreateSeInput) {
    return this.sesService.create(createSeInput);
  }

  @Query(() => [Se], { name: 'ses' })
  findAll() {
    return this.sesService.findAll();
  }

  @Query(() => Se, { name: 'se' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sesService.findOne(id);
  }

  @Mutation(() => Se)
  updateSe(@Args('updateSeInput') updateSeInput: UpdateSeInput) {
    return this.sesService.update(updateSeInput.id, updateSeInput);
  }

  @Mutation(() => Se)
  removeSe(@Args('id', { type: () => Int }) id: number) {
    return this.sesService.remove(id);
  }
}
