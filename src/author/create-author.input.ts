import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Genre } from '../genre/genre.entity';
// import { Genre } from '../genre/genre.entity';

@InputType()
export class CreateAuthorInput {
  @IsString()
  @Field()
  firstname: string;

  @IsString()
  @Field()
  lastname: string;

  // @ArrayMinSize(1)
  // @Field((type) => [Genre])
  // genres: Genre[];
}
