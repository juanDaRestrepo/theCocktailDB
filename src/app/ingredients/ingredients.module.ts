import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { IngredientComponent } from './ingredient/ingredient.component';



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
