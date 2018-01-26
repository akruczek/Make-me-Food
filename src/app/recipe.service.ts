import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

const url = "http://food2fork.com/api/search?key=10cd6ff6c277cdd56b04ff13df62a2cb&q=";
const rUrl = "http://food2fork.com/api/get?key=10cd6ff6c277cdd56b04ff13df62a2cb&rId=";  //+rId

@Injectable()
export class RecipeService {

  result = [];
  recipeDetails = {};

  constructor(
    private http: Http
  ) { }

  getRecipe(searchUrl: string): void {
    this.http.get(url + searchUrl).subscribe(response => {
      this.result = response.json();
      // console.log(response.json());
    });
  }

  getRecipeDescriptions(id: string): void {
    this.http.get(rUrl + id).subscribe(response => {
      this.recipeDetails = response.json().recipe;
      console.log(response.json().recipe);
    });
  }

}
