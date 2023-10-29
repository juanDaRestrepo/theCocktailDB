import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail';

@Injectable({ providedIn: 'root' })
export class CocktailsService {

    private cocktailData: Subject<Cocktail> = new Subject<Cocktail>();

    private apiUrl: string = "https://www.thecocktaildb.com/api/json/v2/9973533/"

    constructor(private http: HttpClient) { }

    setCocktailData(cocktail: Cocktail): void {
        this.cocktailData.next(cocktail);
    }

    getCocktailData(): Observable<Cocktail> {
        return this.cocktailData.asObservable();
    }

    searchCocktailByName(term: string): Observable<Cocktail> {
        return this.http.get<Cocktail>(`${this.apiUrl}/search.php?s=${term}`);
    }

    searchCocktailByCategory(term: string): Observable<Cocktail> {
        return this.http.get<Cocktail>(`${this.apiUrl}/${term}`);
    }

}