import { Component, OnInit } from '@angular/core';
import { RecipeService } from "./../recipe.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {

  }

}
