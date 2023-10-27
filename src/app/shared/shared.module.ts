import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
