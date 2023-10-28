import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail';

@Injectable({providedIn: 'root'})
export class CocktailsService {

    private apiUrl: string = "https://www.thecocktaildb.com/api/json/v1/1"

    constructor(private http: HttpClient) {}

    searchCocktailByName( term: string ): Observable<Cocktail[]> {
        return this.http.get<Cocktail[]>(`${ this.apiUrl }/search.php?s=${term}`);
    }
    
}