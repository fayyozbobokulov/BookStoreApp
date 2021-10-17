import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Author } from './author.entity';
import { Genre } from './genre.entity';

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany((type) => Genre, (genre) => genre.books, { eager: true })
  genres: Genre[];

  @ManyToMany((type) => Author, (author) => author.books, { eager: false })
  authors: Author[];
}
