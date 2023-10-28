import { Component } from '@angular/core';
import { CocktailsService } from '../../../cocktails/services/cocktails.service';
import { Cocktail } from 'src/app/cocktails/interfaces/cocktail';
import { Ingredient } from 'src/app/ingredients/interfaces/Ingredient';
import { IngredientsService } from 'src/app/ingredients/services/ingridients.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public cocktail: Cocktail[] = [];
  public ingredient: Ingredient[] = [];

  constructor( private cocktailsService: CocktailsService, private ingredientService: IngredientsService ) {}

  searchByCocktailOrIngredient( term: string ) {
    this.cocktailsService.searchCocktailByName(term)
      .subscribe( cocktail => {
        this.cocktail = cocktail;
      });
    
    this.ingredientService.searchIngredientByName(term)
      .subscribe( ingredient => {
        this.ingredient = ingredient;
      })
  }
}
