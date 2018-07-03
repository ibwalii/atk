import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipesService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Samosa', 
    'Changes your tune in life', 
    '../../../assets/images/r1.jpg',
    [
      new Ingredient('Flour',10),
      new Ingredient('Milk',5)
    ]),
    new Recipe('Pasta Jollof', 
    'Changes your tune in life', 
    '../../../assets/images/r2.jpg',
    [
      new Ingredient('Pasta',10),
      new Ingredient('Meat',5),
      new Ingredient('Oil', 2)
    ])
  ];

  constructor(private shoppingListService:ShoppingListService) { 

  }

  setRecipes(recipes:Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(){
    return this.recipes.slice();
  }

  getRec(index: number){
    return this.recipes[index];
  }

  NewRecipe(newRecipe:Recipe){
    this.recipes.push(newRecipe);
    this,this.recipesChanged.next(this.recipes.slice())
  }

  UpdateRecipe(index:number, newRecipe:Recipe){
    this.recipes[index]= newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index:number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  onAddIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.addShoppingList(ingredients)
    this.recipesChanged.next(this.recipes.slice());
  }

}
