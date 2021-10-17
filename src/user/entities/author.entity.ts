import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from './book.entity';
import { Genre } from './genre.entity';

@Entity()
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @ManyToMany((type) => Book, (book) => book.authors, { eager: true })
  books: number[];

  @ManyToMany((type) => Genre, (genre) => genre.authors, { eager: false })
  genres: number[];
}
