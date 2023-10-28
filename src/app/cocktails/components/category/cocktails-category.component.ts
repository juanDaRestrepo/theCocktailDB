import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../../services/cocktails.service';
import { Cocktail } from '../../interfaces/cocktail';

@Component({
  selector: 'cocktails-category',
  templateUrl: './cocktails-category.component.html',
  styleUrls: ['./cocktails-category.component.css']
})
export class CocktailsCategoryComponent implements OnInit {

  public popularCocktailsCategory: Cocktail[] = [];
  public latestCocktailsCategory: Cocktail[] = [];

  constructor(private cocktailsService: CocktailsService) { }


  ngOnInit(): void {
    this.cocktailsService.searchCocktailByCategory("popular.php")
      .subscribe(cocktails => {
        this.popularCocktailsCategory = cocktails;
      });

    this.cocktailsService.searchCocktailByCategory("latest.php")
      .subscribe(cocktails => {
        this.latestCocktailsCategory = cocktails;
      });

    this.cocktailsService.searchCocktailByCategory("randomselection.php")
      .subscribe(cocktails => {
        this.latestCocktailsCategory = cocktails;
      });
    
  }
}
