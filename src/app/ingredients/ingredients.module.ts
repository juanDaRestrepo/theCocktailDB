import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';



@NgModule({
  declarations: [
    CategoryComponent,
    IngredientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IngredientsModule { }
