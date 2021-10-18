// import { Genre } from '../genre/genre.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Author } from '../author/author.entity';

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  // @ManyToMany((type) => Genre, { cascade: true })
  // genres: Genre[];

  @ManyToMany((type) => Author, { cascade: true })
  authors: Author[];
}
