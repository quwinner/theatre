import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ChairsService } from './chairs.service';
import { Chair } from './entities/chair.entity';
import { CreateChairInput } from './dto/create-chair.input';
import { UpdateChairInput } from './dto/update-chair.input';
import { chdir } from 'process';

@Resolver(() => Chair)
export class ChairsResolver {
  constructor(private readonly chairsService: ChairsService) {}

  @Query(() => [Chair], { name: 'chairs' })
  findAllInOneSes(@Args('input', { type: () => Int }) input: number) {
    return this.chairsService.findAllInOneSes(input);
  }

  @Query(() => Chair, { name: 'chair' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.chairsService.findOne(id);
  }

  @Mutation(() => Chair)
  updateChair(@Args('updateChairInput') updateChairInput: UpdateChairInput) {
    return this.chairsService.update(updateChairInput.id, updateChairInput);
  }

  // @UseGuards(JwtAuthGuard)
  @Mutation(() => Chair, { name: 'bron' })
  bron(@Args('input') input: CreateChairInput) {
    return this.chairsService.create(input);
  }

  @Mutation(() => Chair)
  removeChair(@Args('id', { type: () => Int }) id: number) {
    return this.chairsService.remove(id);
  }
}
