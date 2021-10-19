import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Author')
export class AuthorType {
  @Field((type) => ID)
  id: number;

  @Field()
  firstname: string;

  @Field()
  lastname: string;
}
