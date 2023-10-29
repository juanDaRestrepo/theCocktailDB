import { Component, Input, OnInit } from '@angular/core';
import { CocktailsService } from '../../services/cocktails.service';
import { Cocktail, Drinks } from '../../interfaces/cocktail';

@Component({
  selector: 'cocktails-category',
  templateUrl: './cocktails-category.component.html',
  styleUrls: ['./cocktails-category.component.css']
})
export class CocktailsCategoryComponent implements OnInit {



  @Input() category: string = "";


  public drinks: Drinks[] = [];

  public classBorderColorsArray = ['border-color-pink', 'border-color-green', 'border-color-skin'];
  public cocktailCategories = {
    popular: "popular",
    latest: "latest",
    random: "random"
  };

  constructor(private cocktailsService: CocktailsService) { }


  ngOnInit(): void {
    switch (this.category) {
      case this.cocktailCategories.popular:
        this.cocktailsService.searchCocktailByCategory("popular.php")
          .subscribe((response: Cocktail) => {
            this.drinks = response.drinks;
          });
        break;
      case this.cocktailCategories.latest:
        this.cocktailsService.searchCocktailByCategory("latest.php")
          .subscribe((response: Cocktail) => {
            this.drinks = response.drinks;
          });
        break;
      case this.cocktailCategories.random:
        this.cocktailsService.searchCocktailByCategory("randomselection.php")
          .subscribe((response: Cocktail) => {
            this.drinks = response.drinks;
          });
        break;
    }

    this.cocktailsService.getCocktailData()
      .subscribe((response: Cocktail) => {
        this.drinks = response.drinks;
      });
  }

  getBorderColor(index: number) {
    return this.classBorderColorsArray[index % this.classBorderColorsArray.length];
  }

  getCategory(): string {
    return this.category;
  }
}
