import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { CocktailComponent } from './cocktail/cocktail.component';



@NgModule({
  declarations: [
    CategoryComponent,
    CocktailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CocktailsModule { }
