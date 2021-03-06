import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from './create-user.input';
import { UserRole } from '../config/user.enum';
import { AuthCredentialsInput } from './auth-credentials.input';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const { firstname, lastname, email, password, role } = createUserInput;

    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.role = this.findUserRole(role);
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);
    console.log(user.password);

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('The user already exists!');
      } else {
        throw new InternalServerErrorException();
      }
    }
    return user;
  }

  async validateUserPassword(
    authCredentialsInput: AuthCredentialsInput,
  ): Promise<string> {
    const { email, password } = authCredentialsInput;
    const user = await this.findOne({ email });
    console.log(user);

    if (user && (await (await user).validatePassword(password))) {
      return email;
    } else {
      return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  private findUserRole(role: string): UserRole | null {
    role = role.toUpperCase();
    switch (role) {
      case 'ADMIN':
        return UserRole.ADMIN;
      case 'MANAGER':
        return UserRole.MANAGER;
      case 'USER':
        return UserRole.USER;
      default:
        throw new ConflictException('Invalid User Role!');
    }
  }
}
