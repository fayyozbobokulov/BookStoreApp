import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccessTokenType } from './accessToken.type';
import { CreateUserInput } from './create-user.input';
import { AuthCredentialsInput } from './auth-credentials.input';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserType } from './user.type';

@Resolver((of) => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation((returns) => UserType)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    console.log('Resolver working');
    return this.userService.signUp(createUserInput);
  }

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation((returns) => AccessTokenType)
  async signIn(
    @Args('authCredentialsDto') authCredentialsInput: AuthCredentialsInput,
  ): Promise<{ accessToken: string }> {
    return this.userService.signIn(authCredentialsInput);
  }

  // @Query((returns) => BookType)
  // getBook(@Args('id') id: number): Promise<Book> {
  //   return;
  // }

  // @Query((returns) => [BookType])
  // getBooks(): Promise<Book[]> {
  //   return;
  // }
}
