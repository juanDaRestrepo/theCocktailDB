import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientCategoryComponent } from './components/category/ingredient-category.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';

@NgModule({
  declarations: [
    IngredientCategoryComponent,
    IngredientComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IngredientCategoryComponent
  ]
})
export class IngredientsModule { }
