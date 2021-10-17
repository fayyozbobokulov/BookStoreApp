import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Genre extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  // @ManyToMany()
  // books: number[];

  // @ManyToMany()
  // authors: number[];

  // @ManyToOne()
  // manager: number[];
}
