import { CreateSeInput } from './create-se.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSeInput extends PartialType(CreateSeInput) {
  @Field(() => Int)
  id: number;
}
