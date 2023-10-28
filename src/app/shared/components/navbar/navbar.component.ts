import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchByCocktailOrIngredient( term: string ) {
    console.log("desde la home");
    console.log({term})
  }
}
