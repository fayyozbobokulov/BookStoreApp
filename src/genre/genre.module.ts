import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenreRepository } from './genre.repository';
import { GenreResolver } from './genre.resolver';
import { GenreService } from './genre.service';

@Module({
  imports: [TypeOrmModule.forFeature([GenreRepository])],
  providers: [GenreService, GenreResolver],
})
export class GenreModule {}
