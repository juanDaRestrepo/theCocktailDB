import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { CocktailPageComponent } from './pages/cocktail-page/cocktail-page.component';
import { CocktailsRoutingModule } from './cocktails-routing.module';



@NgModule({
  declarations: [
    CategoryComponent,
    CocktailComponent,
    CocktailPageComponent
  ],
  imports: [
    CommonModule,
    CocktailsRoutingModule
  ]
})
export class CocktailsModule { }
