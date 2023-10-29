import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailsService } from '../../services/cocktails.service';
import { Cocktail, Drinks } from '../../interfaces/cocktail';


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
  public ingridients:[] = []; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private cocktailService: CocktailsService,
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
  
      });
  }


}


