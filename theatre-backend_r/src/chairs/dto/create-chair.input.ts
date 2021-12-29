import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateChairInput {
  @Field(() => Int)
  number: number;

  @Field(() => Int)
  seId: number;

  @Field(() => Int)
  userId: number;
}
