import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Author } from './author.entity';
import { Book } from './book.entity';

@Entity()
export class Genre extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany((type) => Book, (book) => book.genres, { eager: false })
  books: Book[];

  @ManyToMany((type) => Author, (author) => author.genres, { eager: true })
  authors: number[];
}
