import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Ingredient, IngredientsList } from 'src/app/ingredients/interfaces/Ingredient';

@Injectable({providedIn: 'root'})
export class IngredientsService {

    private ingredientData: Subject<Ingredient[]> = new Subject<Ingredient[]>();

    private apiUrl: string = "https://www.thecocktaildb.com/api/json/v2/9973533/"

    constructor(private http: HttpClient) {}
    
    setIngredientData(ingredients: Ingredient[]): void {
        this.ingredientData.next(ingredients);
      }
    
    getIngredientData(): Observable<Ingredient[]> {
      return this.ingredientData.asObservable();
    }

    searchIngredientByName( term: string ): Observable<Ingredient[]> {
        return this.http.get<Ingredient[]>(`${ this.apiUrl }/search.php?i=${term}`);
    }

    getIngredients(): Observable<IngredientsList> {
      return this.http.get<IngredientsList>(`${ this.apiUrl }/list.php?i=list`);
  }
    
}