import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Genre')
export class GenreType {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;
}
