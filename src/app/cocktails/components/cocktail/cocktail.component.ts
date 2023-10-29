import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent {
  @Input() name: string = "";
  @Input() image: string = "";
  @Input() borderColor: string = "";
  @Input() isFirstDrink: boolean = false;
  @Input() category: string = "";

}
