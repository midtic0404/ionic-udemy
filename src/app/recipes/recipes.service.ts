import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.recipetineats.com/wp-content/uploads/2017/08/Schnitzel-9.jpg',
      ingredients: ['Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.thespruceeats.com/thmb/d2snX_gkTaZY3rdVMU1Sk-1Cny8=/2500x1875/smart/filters:no_upscale()/meat-sauce-spaghetti-2500-56dc8ae53df78c5ba053531b.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomato']
    },
  ]


  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find((recipe) => {
      return recipe.id === recipeId;
    })}
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
        return recipe.id !== recipeId; 
      });
  }
}
