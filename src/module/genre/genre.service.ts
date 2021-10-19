import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGenreInput } from './create-genre.input';
import { Genre } from './genre.entity';
import { GenreRepository } from './genre.repository';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(GenreRepository) private genreRepository: GenreRepository,
  ) {}

  async createGenre(createGenreInput: CreateGenreInput): Promise<Genre> {
    return this.genreRepository.createGenre(createGenreInput);
  }

  async getGenre(id: number): Promise<Genre> {
    return this.genreRepository.findOne({ id });
  }

  async getGenres(): Promise<Genre[]> {
    return this.genreRepository.find();
  }
}
