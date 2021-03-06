import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorRepository } from './author.repository';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorRepository])],
  providers: [AuthorService, AuthorResolver],
})
export class AuthorModule {}
