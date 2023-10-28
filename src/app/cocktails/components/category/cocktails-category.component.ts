import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../../services/cocktails.service';
import { Cocktail } from '../../interfaces/cocktail';

@Component({
  selector: 'cocktails-category',
  templateUrl: './cocktails-category.component.html',
  styleUrls: ['./cocktails-category.component.css']
})
export class CocktailsCategoryComponent implements OnInit{

  public latestCocktailCategory: Cocktail[] = []; 

  constructor( private cocktailsService: CocktailsService) {}

  
  ngOnInit(): void {
    this.cocktailsService.searchCocktailByCategory("list")
      .subscribe(cocktails => {
        console.log(cocktails)
        this.latestCocktailCategory = cocktails;
      });
  }
}
