import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientCategoryComponent } from './components/category/ingredient-category.component';

@NgModule({
  declarations: [
    IngredientCategoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IngredientCategoryComponent
  ]
})
export class IngredientsModule { }
