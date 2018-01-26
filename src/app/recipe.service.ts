import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const url = "http://food2fork.com/api/search?key=10cd6ff6c277cdd56b04ff13df62a2cb&q=";
const ingredients = "chicken,apple";

@Injectable()
export class RecipeService {
  key: "10cd6ff6c277cdd56b04ff13df62a2cb";
  url: "";
  constructor(
    private http: Http
  ) { }

  getRecipe(): void {
    console.log("getRecipe");
    this.http.get(`http://food2fork.com/api/search?key=10cd6ff6c277cdd56b04ff13df62a2cb&q=${ingredients}`).subscribe(response => {
      console.log(response.json());
    });
  }

}
