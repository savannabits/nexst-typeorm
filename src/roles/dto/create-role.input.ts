import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRoleInput {
  @Field(() => String, { description: 'Role Name' })
  name: string;

  @Field(()=> String,{nullable: true, description: 'Optional Description'})
  description?: string;
}
