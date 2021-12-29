import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Chair } from 'src/chairs/entities/chair.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.enum';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', unique: true })
  @Field({ nullable: false })
  login: string;

  @Column({ type: 'mediumtext' })
  @Field({ nullable: false })
  password: string;

  @CreateDateColumn({
    name: 'dateReg',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  @Field({ nullable: false })
  dateReg: Date;

  @CreateDateColumn({
    name: 'lastLogin',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  @Field({ nullable: false })
  lastLogin: Date;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  @Field({ nullable: false })
  role: Role;

  /////////////////////////////////////////////////////////////////////////////////
  // Relations

  @OneToMany(() => Chair, (chair) => chair.user)
  chairs: Chair[];
}
