import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Author } from './author.entity';
import { AuthorService } from './author.service';
import { AuthorType } from './author.type';
import { CreateAuthorInput } from './create-author.input';

@Resolver((of) => AuthorType)
export class AuthorResolver {
  constructor(private authorService: AuthorService) {}
  @Query((returns) => [AuthorType])
  async getAuhtors(): Promise<Author[]> {
    return this.authorService.getAllAuthors();
  }

  @Mutation((returns) => AuthorType)
  async createAuthor(
    @Args('createAuthorInput')
    createAuthorInput: CreateAuthorInput,
  ): Promise<Author> {
    return this.authorService.createAuthor(createAuthorInput);
  }
}
