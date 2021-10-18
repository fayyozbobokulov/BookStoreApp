import { Field, InputType } from '@nestjs/graphql';
import { IsIn, IsString, MaxLength, MinLength } from 'class-validator';
import { UserRole } from '../config/user.enum';
@InputType()
export class AuthCredentialsInput {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Field()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Field()
  password: string;

  @IsIn([UserRole.ADMIN, UserRole.MANAGER, UserRole.USER])
  @Field()
  rols: UserRole;
}
