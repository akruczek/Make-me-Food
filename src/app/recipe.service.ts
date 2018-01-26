import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeService {

  result = [];

  constructor(
    private http: Http
  ) { }

  getRecipe(url: string): void {
    this.http.get(url).subscribe(response => {
      this.result = response.json();
      console.log(response.json());
      // return response.json();
    });
  }

}
