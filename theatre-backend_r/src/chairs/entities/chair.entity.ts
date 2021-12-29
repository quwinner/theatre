import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Se } from 'src/ses/entities/se.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@ObjectType()
@Index('FK_user_id_chair', ['userId'], {})
@Index('FK_se_id_chair', ['seId'], {})
@Entity({ name: 'chairs' })
export class Chair {
  @PrimaryColumn({ type: 'int' })
  @Field(() => Int)
  number: number;

  @PrimaryColumn({ type: 'int' })
  @Field(() => Int)
  seId: number;

  @PrimaryColumn({ type: 'int' })
  @Field(() => Int)
  userId: number;

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Relationships

  @ManyToOne(() => Se, (se) => se.chairs, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'seId', referencedColumnName: 'id' }])
  se: Se;

  @ManyToOne(() => User, (user) => user.chairs, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  user: User;
}
