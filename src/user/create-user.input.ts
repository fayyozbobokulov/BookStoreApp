import { Field, InputType } from '@nestjs/graphql';
import { IsIn, MinLength } from 'class-validator';
import { UserRole } from '../config/user.enum';

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

  @IsIn([UserRole.ADMIN, UserRole.MANAGER, UserRole.USER])
  @Field()
  role?: UserRole;
}
