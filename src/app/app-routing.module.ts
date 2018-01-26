import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { SearchResultComponent } from "./search-result/search-result.component";
import { RecipeComponent } from "./recipe/recipe.component";

const routes: Routes = [
  {path: "", redirectTo: "/search", pathMatch: "full"},
  {path: "recipe", component: RecipeComponent},
  {path: "search", component: SearchResultComponent}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
