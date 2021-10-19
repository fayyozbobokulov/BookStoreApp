import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.entity';
import { BookService } from './book.service';
import { BookType } from './book.type';
import { CreateBookInput } from './create-book.input';

@Resolver((of) => BookType)
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query((returns) => BookType)
  async getBook(@Args('id') id: number): Promise<Book> {
    return this.bookService.getBook(id);
  }

  @Query((returns) => [BookType])
  async getBooks(): Promise<Book[]> {
    return this.bookService.getBooks();
  }

  @Mutation((returns) => BookType)
  async createBook(
    @Args('createBookInput') createBookInput: CreateBookInput,
  ): Promise<Book> {
    return this.bookService.createBook(createBookInput);
  }
}
