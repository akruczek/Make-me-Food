import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Http } from '@angular/http';

const url = "http://food2fork.com/api/search?key=10cd6ff6c277cdd56b04ff13df62a2cb&q=";
const rUrl = "http://food2fork.com/api/get?key=10cd6ff6c277cdd56b04ff13df62a2cb&rId=";

@Injectable()
export class RecipeService {

  result = [];
  recipeDetails = {};
  searchUrl = "";
  isSearching = false;
  page = 0;

  constructor(
    private http: Http
  ) { }

  getRecipe(searchUrl: string): void {
    this.isSearching = true;
    this.searchUrl = searchUrl;
    if (this.page===0) this.page = 1;
    this.http.get(url + searchUrl + `&page=${this.page}`).subscribe(response => {
      this.result = response.json();
      this.isSearching = false;
      // console.log(response.json());
    });
  }

  getRecipeDescriptions(id: string): void {
    this.isSearching = true;
    this.http.get(rUrl + id).subscribe(response => {
      this.recipeDetails = response.json().recipe;
      this.isSearching = false;
      // console.log(response.json().recipe);
    });
  }

  changePage(next: boolean): void {
    if (next) this.page++;
    else this.page--;
    this.getRecipe(this.searchUrl);
  }

}
