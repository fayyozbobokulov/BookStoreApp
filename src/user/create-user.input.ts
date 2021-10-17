import { Field, InputType } from '@nestjs/graphql';
import { Matches, MinLength } from 'class-validator';
import { UserRole } from 'src/config/user.enum';

@InputType()
export class CreateUserInput {
  @MinLength(1)
  @Field()
  firstname: string;

  @MinLength(1)
  @Field()
  lastname: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
