import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @MaxLength(16)
  @MinLength(4)
  login: string;

  @Field()
  @IsNotEmpty()
  @MaxLength(16)
  @MinLength(4)
  password: string;
}
