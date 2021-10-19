import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { BookRespository } from './book.repository';
import { CreateBookInput } from './create-book.input';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookRespository)
    private readonly bookRepository: BookRespository,
  ) {}

  async createBook(createBookInput: CreateBookInput): Promise<Book> {
    return this.bookRepository.createBook(createBookInput);
  }

  async getBook(id: number): Promise<Book> {
    return this.bookRepository.findOne({ id });
  }

  async getBooks(): Promise<Book[]> {
    return this.bookRepository.find();
  }
}
