import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserRole } from 'src/config/user.enum';

@ObjectType('User')
export class UserType {
  @Field((type) => ID)
  id: number;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  salt: string;

  @Field()
  role: UserRole.USER;
}
