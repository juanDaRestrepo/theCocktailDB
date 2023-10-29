import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailsService } from '../../services/cocktails.service';

@Component({
  selector: 'app-cocktail-page',
  templateUrl: './cocktail-page.component.html',
  styles: [
  ]
})
export class CocktailPageComponent implements OnInit {
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
          if (!cocktail.drinks){
            this.router.navigateByUrl('');
            return;
          }
      });
  }


}


