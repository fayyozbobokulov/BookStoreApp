import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateGenreInput } from './create-genre.input';
import { GenreService } from './genre.service';
import { GenreType } from './genre.type';

@Resolver((of) => GenreType)
export class GenreResolver {
  constructor(private genreService: GenreService) {}

  @Query(() => String)
  sayHi(): string {
    return 'Hi from Genre Resolver';
  }

  @Mutation(() => GenreType)
  createGenre(@Args('createGenreInput') createGenreInput: CreateGenreInput) {
    return this.genreService.createGenre(createGenreInput);
  }

  @Query(() => GenreType)
  getGenre(@Args('id', { type: () => Number }) id: number) {
    return this.genreService.getGenre(id);
  }
}
