import { CreateRecipeInput } from './create-recipe.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateRecipeInput extends PartialType(CreateRecipeInput) {
  @Field(() => String)
  _id: ObjectId;
}
