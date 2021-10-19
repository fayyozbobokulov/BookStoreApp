import { EntityRepository, Repository } from 'typeorm';
import { Author } from './author.entity';
import { CreateAuthorInput } from './create-author.input';

@EntityRepository(Author)
export class AuthorRepository extends Repository<Author> {
  async createAuthor(createAuthorInput: CreateAuthorInput): Promise<Author> {
    const { firstname, lastname } = createAuthorInput;
    console.log(createAuthorInput);

    const author = new Author();
    author.firstname = firstname;
    author.lastname = lastname;
    console.log(author, 'Author');
    // author.genres = [...genres];
    return author.save();
  }
}
