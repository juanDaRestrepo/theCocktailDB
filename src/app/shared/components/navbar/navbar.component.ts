import { Component } from '@angular/core';
import { CocktailsService } from '../../../cocktails/services/cocktails.service';
import { IngredientsService } from 'src/app/ingredients/services/ingridients.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor( private cocktailsService: CocktailsService, private ingredientsService: IngredientsService ) {}

  searchByCocktailOrIngredient( term: string ) {
    this.cocktailsService.searchCocktailByName(term)
      .subscribe( cocktail => {
        this.cocktailsService.setCocktailData(cocktail);
      });
    
    this.ingredientsService.searchIngredientByName(term)
      .subscribe( ingredients => {
        console.log(ingredients)
        this.ingredientsService.setIngredientData(ingredients);
      })
  }
}
