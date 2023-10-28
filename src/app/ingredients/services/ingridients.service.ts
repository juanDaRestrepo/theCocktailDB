import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Ingredient } from 'src/app/ingredients/interfaces/Ingredient';

@Injectable({providedIn: 'root'})
export class IngredientsService {

    private ingredientData: Subject<Ingredient[]> = new Subject<Ingredient[]>();

    private apiUrl: string = "https://www.thecocktaildb.com/api/json/v1/1"

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
    
}