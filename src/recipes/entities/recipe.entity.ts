import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Recipe {
  @Field(() => String,{description: 'Unique Mongo ID'})
  _id: string;

  @Prop({unique: true, required: true})
  @Field(() => String, { description: 'Name of the recipe' })
  name: string;
  
  @Prop()
  @Field(() => String, { nullable: true, description: 'Recipe Description goes' })
  description?: string;

  @Field(()=> String, { nullable: true })
  createdAt?: string;

  @Field(()=> String, { nullable: true })
  updatedAt?: Date;
}

export type RecipeDocument = Recipe & Document;
export const RecipeSchema = SchemaFactory.createForClass(Recipe);