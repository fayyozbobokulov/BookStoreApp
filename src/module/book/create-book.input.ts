import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateBookInput {
  @MinLength(1)
  @Field()
  title: string;

  @MinLength(1)
  @Field()
  authorIds: number[];

  @MinLength(1)
  @Field()
  genreIds: number[];
}
