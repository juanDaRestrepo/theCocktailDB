import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailsService } from '../../services/cocktails.service';
import { Cocktail, Drinks } from '../../interfaces/cocktail';
import { IngredientsService } from 'src/app/ingredients/services/ingridients.service';
import { Ingredient } from 'src/app/ingredients/interfaces/Ingredient';


@Component({
  selector: 'app-cocktail-page',
  templateUrl: './cocktail-page.component.html',
  styleUrls: ['./cocktail-page.component.css']
})
export class CocktailPageComponent implements OnInit {

 

  public cocktail?: Cocktail;
  public drink?: Drinks;
  public name: string = "";
  public urlImg: string= "";
  public ingredients: Ingredient[] = []; 
  public imagesFileName: string[] = ["Egg.png", "Gin.png", "Rum.png", "Tequila.png", "Vanilla.png", "Vodka.png"];

  constructor(
    private activatedRoute: ActivatedRoute,
    private cocktailService: CocktailsService,
    public ingredientsService: IngredientsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({ id }) => {
        this.searchCocktail(id);
      })
  }

  searchCocktail(id: number): void {
    this.cocktailService.searchCocktailById(id)
      .subscribe(cocktail => {
        if (!cocktail.drinks) {
          this.router.navigateByUrl('');
          return;
        }
        this.cocktail = cocktail;
        this.drink = cocktail.drinks[0]
        console.log(this.drink)
        this.name = this.drink.strDrink;
        this.urlImg = this.drink.strDrinkThumb;
        this.ingredients = this.getIngredients(this.drink);
      });
  }
  
  getIngredients(drink: Drinks): Ingredient[] {
    const ingredients: Ingredient[] = [];
    Object.keys(drink).forEach((key: string, index) => {
      if (key.includes("strIngredient")) {
        const name = drink[key];
        const measureNumber = key.slice(-1)
        const measure = drink["strMeasure"+measureNumber] ?? "";
        if (typeof name === 'string' && name.trim() !== '') {
          ingredients.push({name, measure});
        }
      }
    });
    console.log(ingredients)
    return ingredients;
  }
  
  
  
  
  
  
  
  

}


