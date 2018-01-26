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

  info(): void{
    // console.log(this.results);
    console.log(this.recipeService.result);
  }

}