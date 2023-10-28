import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailPageComponent } from './pages/cocktail-page/cocktail-page.component';
import { CocktailsRoutingModule } from './cocktails-routing.module';
import { CocktailsCategoryComponent } from './components/category/cocktails-category.component';



@NgModule({
  declarations: [
    CocktailsCategoryComponent,
    CocktailPageComponent
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
