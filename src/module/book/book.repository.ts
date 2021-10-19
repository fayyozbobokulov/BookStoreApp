import { EntityRepository, Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookInput } from './create-book.input';

@EntityRepository(Book)
export class BookRespository extends Repository<Book> {
  async createBook(createBookInput: CreateBookInput): Promise<Book> {
    const { title } = createBookInput;
    const book = new Book();
    book.title = title;
    book.save();
    return book;
  }
}
