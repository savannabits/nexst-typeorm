import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity({name: 'roles'})
export class Role {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Unique ID (Primary)' })
  id: number;

  @Column({type: 'varchar', unique: true})
  @Field(() => String, {description: 'Role Name'})
  name: string;

  @Column({type: 'text', nullable: true})
  @Field(() => String,{nullable: true, description: 'Optional Role Description'})
  description?: string;

  @CreateDateColumn()
  @Field(() => Date, {nullable: true})
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => Date, {nullable: true})
  updatedAt: Date;

}
