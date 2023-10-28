import { Component, Input, OnInit } from '@angular/core';
import { CocktailsService } from '../../services/cocktails.service';
import { Cocktail, Drinks } from '../../interfaces/cocktail';

@Component({
  selector: 'cocktails-category',
  templateUrl: './cocktails-category.component.html',
  styleUrls: ['./cocktails-category.component.css']
})
export class CocktailsCategoryComponent implements OnInit {



  @Input() 
  getCategory: string = "";

  public cocktails: Cocktail = { drinks: [] };
  public drinks: Drinks[] = [];
  public cocktailCategories = {
    popular : "popular",
    latest : "latest",
    random : "random"
  };
  
  constructor(private cocktailsService: CocktailsService) { }


  ngOnInit(): void {
    switch (this.getCategory){
      case this.cocktailCategories.popular : 
        this.cocktailsService.searchCocktailByCategory("popular.php")
          .subscribe((response: Cocktail | Cocktail[]) => {
            if (Array.isArray(response)) {
              this.cocktails = response[0];
              this.drinks = response.flatMap(cocktail => cocktail.drinks);
            } else {
              this.cocktails = response;
              this.drinks = response.drinks;
            }
        });
      break;
      case  this.cocktailCategories.latest : 
        this.cocktailsService.searchCocktailByCategory("latest.php")
        .subscribe((response: Cocktail | Cocktail[]) => {
          if (Array.isArray(response)) {
            this.cocktails = response[0];
            this.drinks = response.flatMap(cocktail => cocktail.drinks);
          } else {
            this.cocktails = response;
            this.drinks = response.drinks;
          }
        });
      break;
      case this.cocktailCategories.random : 
        this.cocktailsService.searchCocktailByCategory("randomselection.php")
        .subscribe((response: Cocktail | Cocktail[]) => {
          if (Array.isArray(response)) {
            this.cocktails = response[0];
            this.drinks = response.flatMap(cocktail => cocktail.drinks);
          } else {
            this.cocktails = response;
            this.drinks = response.drinks;
          }
        });
      break;
  
    }    
  }
}
