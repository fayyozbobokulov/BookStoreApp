import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccessTokenType } from '../jwt/accessToken.type';
import { CreateUserInput } from './create-user.input';
import { AuthCredentialsInput } from './auth-credentials.input';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserType } from './user.type';
import { Book } from '../module/book/book.entity';
import { BookType } from '../module/book/book.type';

@Resolver((of) => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation((returns) => UserType)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    console.log('Resolver working');
    return this.userService.signUp(createUserInput);
  }

  @Mutation((returns) => AccessTokenType)
  async signIn(
    @Args('authCredentialsDto') authCredentialsInput: AuthCredentialsInput,
  ): Promise<{ accessToken: string }> {
    return this.userService.signIn(authCredentialsInput);
  }

  @Query((returns) => BookType)
  getBook(@Args('id') id: number): Promise<Book> {
    return;
  }

  @Query((returns) => [BookType])
  getBooks(): Promise<Book[]> {
    return;
  }
}
