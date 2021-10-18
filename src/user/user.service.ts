import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsInput } from './auth-credentials.input';
import { CreateUserInput } from './create-user.input';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(createUserInput: CreateUserInput): Promise<User> {
    console.log('user service is working');
    return this.userRepository.createUser(createUserInput);
  }

  async signIn(
    authCredentialsInput: AuthCredentialsInput,
  ): Promise<{ accessToken: string }> {
    const email = await this.userRepository.validateUserPassword(
      authCredentialsInput,
    );
    if (!email) {
      throw new UnauthorizedException('Invalid Credentials!');
    }

    const payload = { email };
    const accessToken = await this.jwtService.sign(payload);

    return { accessToken };
  }
}
