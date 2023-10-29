import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailPageComponent } from './pages/cocktail-page/cocktail-page.component';
import { CocktailsRoutingModule } from './cocktails-routing.module';
import { CocktailsCategoryComponent } from './components/category/cocktails-category.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { CategoryToDrinksPipe } from '../pipes/category-to-drinks.pipe';



@NgModule({
  declarations: [
    CocktailsCategoryComponent,
    CocktailPageComponent,
    CocktailComponent,
    CategoryToDrinksPipe,
  ],
  imports: [
    CommonModule,
    CocktailsRoutingModule
  ],
  exports: [
    CocktailsCategoryComponent
  ]
})
export class CocktailsModule { }
