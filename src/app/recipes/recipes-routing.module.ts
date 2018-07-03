import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes.component";
import { DefaultComponent } from "./default/default.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { AuthGuard } from "../auth/auth-guard.service";

const recipesRoutes : Routes = [
    { path:'', component: RecipesComponent, children:[
        {path: '', component: DefaultComponent},
        {path: 'new', component: RecipeEditComponent, canActivate:[AuthGuard]},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate:[AuthGuard]}
    ]},
] 

@NgModule({
    imports:[RouterModule.forChild(recipesRoutes)],
    exports:[RouterModule]
})
export class RecipesRoutingModule{

}