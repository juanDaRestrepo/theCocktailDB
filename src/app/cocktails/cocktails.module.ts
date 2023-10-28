import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';



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
