import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRecipeInput {
  @Field(()=> String)
  name: string;
  
  @Field(()=> String,{nullable: true})
  description ?: string;
}
