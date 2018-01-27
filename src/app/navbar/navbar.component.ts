import { Component, OnInit } from '@angular/core';
import { RecipeService } from "./../recipe.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  inputValue: "";

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {

  }

  search(): void {
    let searchUrl = "";
    if (this.inputValue !== undefined) {
      this.inputValue.split(" ").map((item, index) => {
        index===0 ? searchUrl += `${item}` : searchUrl += `,${item}`;
      });
      this.recipeService.getRecipe(searchUrl);
    }
  }

  randomRecipe(): void {
    let randomNumber = String(Math.floor(Math.random() * 50000));
    this.recipeService.getRecipeDescriptions(randomNumber);
  }

}
