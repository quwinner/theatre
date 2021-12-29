import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Chair } from 'src/chairs/entities/chair.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'ses' })
export class Se {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar' })
  @Field({ nullable: false })
  name: string;

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Relationships

  @OneToMany(() => Chair, (chair) => chair.se)
  chairs: Chair[];
}
