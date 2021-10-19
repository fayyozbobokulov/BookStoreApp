import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Author } from '../author/author.entity';
import { AuthorType } from '../author/author.type';
import { Genre } from '../genre/genre.entity';
import { GenreType } from '../genre/genre.type';

@ObjectType()
export class BookType {
  @Field(() => ID)
  id: number;

  @Field()
  title: number;

  @Field(() => [AuthorType])
  authors: Author[];

  @Field(() => [GenreType])
  genres: Genre[];
}
