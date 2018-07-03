import { Component, OnInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Ingredient[];
  private ingredientsSubs: Subscription;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsSubs = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredient:Ingredient[]) => {
        this.ingredients = ingredient;
      }
    )
  }  

  onEdit(index:number){
    this.shoppingListService.ingredientEdit.next(index);
  }
  ngOnDestroy() {
    this.ingredientsSubs.unsubscribe();
  }

}
