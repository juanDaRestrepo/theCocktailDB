import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CocktailsModule } from './cocktails/cocktails.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { GintonicComponent } from './gintonic/gintonic.component';

@NgModule({
  declarations: [
    AppComponent,
    GintonicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CocktailsModule,
    IngredientsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
