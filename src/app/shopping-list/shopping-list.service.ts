import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientEdit = new Subject<number>();

    private ingredients : Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Banana', 10)
      ];
    constructor(){}
    
    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(i: number){
        return this.ingredients[i];
    }

    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addShoppingList(ingredients:Ingredient[]){
       this.ingredients.push(...ingredients);
       this.ingredientsChanged.emit(this.ingredients.slice());
    }

    onUpdate(index: number, updatedIngredient:Ingredient){
        this.ingredients[index] = updatedIngredient;
        console.log(this.ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    
    onRemove(index:number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}