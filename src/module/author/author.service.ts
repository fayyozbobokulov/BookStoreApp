import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './author.entity';
import { AuthorRepository } from './author.repository';
import { CreateAuthorInput } from './create-author.input';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorRepository)
    private readonly authorRepository: AuthorRepository,
  ) {}

  async createAuthor(createAuthorInput: CreateAuthorInput): Promise<Author> {
    return this.authorRepository.createAuthor(createAuthorInput);
  }

  async getAllAuthors(): Promise<Author[]> {
    return this.authorRepository.find();
  }
}
