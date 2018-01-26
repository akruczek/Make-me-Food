import { Component, OnInit } from '@angular/core';
import { RecipeService } from "./../recipe.service";

const url = "http://food2fork.com/api/search?key=10cd6ff6c277cdd56b04ff13df62a2cb&q=";

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
    console.log(this.inputValue);
    let searchUrl = url;
    if (this.inputValue !== undefined) {
      this.inputValue.split(" ").map((item, index) => {
        index===0 ? searchUrl += `${item}` : searchUrl += `,${item}`;
      });
      this.recipeService.getRecipe(searchUrl);
    }
  }

}
