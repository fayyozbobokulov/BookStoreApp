import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserType } from './user.type';

@Resolver((of) => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation((returns) => UserType)
  signUp(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return;
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
