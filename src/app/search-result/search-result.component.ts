import { Component, OnInit } from '@angular/core';
import { RecipeService } from "./../recipe.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  constructor( private recipeService: RecipeService ) { }

  results = this.recipeService.result;

  ngOnInit() {

  }

  getRecipeDetails(id: string): void {
    this.recipeService.getRecipeDescriptions(id);
  }

}
