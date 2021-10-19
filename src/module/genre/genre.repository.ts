import { EntityRepository, Repository } from 'typeorm';
import { CreateGenreInput } from './create-genre.input';
import { Genre } from './genre.entity';

@EntityRepository(Genre)
export class GenreRepository extends Repository<Genre> {
  async createGenre(createGenreInput: CreateGenreInput): Promise<Genre> {
    const { title } = createGenreInput;
    const genre = new Genre();
    console.log(genre);
    genre.title = title;
    return genre;
  }
}
