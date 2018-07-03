import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeToDisplay: Recipe;
  currentID :number;

  constructor(private recipeService:RecipesService,
              private currentRoute: ActivatedRoute,
              private router:Router
            ) {
   }

  ngOnInit() {
    this.currentRoute.params.subscribe(
      (params:Params) => {
        this.currentID = +params['id'];
        this.recipeToDisplay = this.recipeService.getRec(this.currentID);
      }
    )
  }

  onAddtoShoppingList(){
    this.recipeService.onAddIngredientsToShoppingList(this.recipeToDisplay.ingredients)
  }

  onEditRecipe(){
    //Navigate uses absolute routing
    this.router.navigate(['recipes',this.currentID, 'edit'])
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.currentID);
    this.router.navigate(['recipes'])
  }

}
