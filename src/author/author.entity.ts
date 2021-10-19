import { Book } from '../book/book.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genre } from '../genre/genre.entity';

@Entity()
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @ManyToMany((type) => Genre, (genres) => genres.authors)
  @JoinTable()
  genres: Genre[];

  @ManyToMany(() => Book, (books) => books.authors)
  books: Book[];
}
