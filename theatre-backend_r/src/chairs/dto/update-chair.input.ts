import { CreateChairInput } from './create-chair.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateChairInput extends PartialType(CreateChairInput) {
  @Field(() => Int)
  id: number;
}
