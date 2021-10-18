import { Book } from '../book/book.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
// import { Genre } from '../genre/genre.entity';

@Entity()
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  // @ManyToMany((type) => Genre, { cascade: true })
  // @JoinTable()
  // genres: Genre[];
}
