import { Field, InputType } from '@nestjs/graphql';
import { IsString, MaxLength, MinLength } from 'class-validator';
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
}
