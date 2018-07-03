import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { HomeComponent } from "./core/home/home.component";

const appRoutes : Routes = [
    { path: '', component: HomeComponent},
    { path: 'recipes', loadChildren:'./recipes/recipes.module#RecipesModule'},//Lazy loading
    { path:'shoppinglist', component: ShoppingListComponent},
    { path:'signup', component: SignupComponent},
    { path:'signin', component: SigninComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule{

}