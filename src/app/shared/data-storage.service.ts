import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipesService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipe.model";
import 'rxjs/add/operator/map';
import { AuthService } from "../auth/auth.service";

@Injectable()

export class DataStorageService{
    constructor(private http: Http, private recipeService: RecipesService,
                private authService:AuthService){}

    storeRecipe(){
        let token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-123.firebaseio.com/recipes.json?auth='+token, this.recipeService.getRecipe())
    }

    fetchRecipe(){
        let token = this.authService.getToken();
        this.http.get('https://ng-recipe-book-123.firebaseio.com/recipes.json?auth='+token)
                .map(
                    (response:Response) => {
                        // console.log(response);
                        const recipes: Recipe[] = response.json();
                        for (let recipe of recipes){
                            if(!recipe['ingredients']){
                                recipe['ingredients'] = [];
                            }
                        } 
                        return recipes;
                    }
                )
                .subscribe(
                    (recipes: Recipe[]) => {
                        this.recipeService.setRecipes(recipes);
                    }
                )
    }
}