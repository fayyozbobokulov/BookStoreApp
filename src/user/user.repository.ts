import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@EntityRepository()
export class UserRepository extends Repository<User> {
  async signUp(authCreadentialsDto: AuthCredentialsDto): Promise<void> {
    const { email, password } = authCreadentialsDto;

    const user = new User();
    user.email = email;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);
    console.log(user.password);

    try {
      await user.save();
    } catch (error) {
      console.log(typeof error.code);
      if (error.code === '23505') {
        throw new ConflictException('The user already exists!');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<string> {
    const { email, password } = authCredentialsDto;
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
}
