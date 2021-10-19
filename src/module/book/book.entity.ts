import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Author } from '../author/author.entity';
import { Genre } from '../genre/genre.entity';

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(() => Author, (authors) => authors.books)
  @JoinTable()
  authors: Author[];

  @ManyToMany(() => Genre, (genres) => genres.books)
  @JoinTable()
  genres: Genre[];
}
