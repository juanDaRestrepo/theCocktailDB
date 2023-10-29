import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CocktailsModule } from '../cocktails/cocktails.module';
import { IngredientsModule } from '../ingredients/ingredients.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    CocktailsModule,
    IngredientsModule,
    FormsModule
  ],
  exports: [
    HomePageComponent,
    NavbarComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
