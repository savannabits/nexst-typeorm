import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { Recipe, RecipeDocument } from './entities/recipe.entity';

@Injectable()
export class RecipesService {
  constructor(@InjectModel(Recipe.name) private model: Model<RecipeDocument>) {}
  
  async create(createRecipeInput: CreateRecipeInput) {
    return  await this.model.create(createRecipeInput);
  }

  async findAll(): Promise<Array<RecipeDocument>> {
    return await this.model.find();
  }

  async findOne(id: ObjectId) {
    return await this.model.findById(id);
  }

  async update(id: ObjectId, updateRecipeInput: UpdateRecipeInput) {
    await this.model.updateOne({_id: id},updateRecipeInput);
    return await this.findOne(id);
  }

  remove(id: ObjectId) {
    return this.model.deleteOne({_id: id})
  }
}
