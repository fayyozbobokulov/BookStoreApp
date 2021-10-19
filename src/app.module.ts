import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { BookModule } from './module/book/book.module';
import { GenreModule } from './module/genre/genre.module';
import { AuthorModule } from './module/author/author.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req }) => ({ req }),
    }),
    AuthorModule,
    BookModule,
    GenreModule,
  ],
})
export class AppModule {}
