import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent {
  @Input() name: string = "";
  @Input() bgColor: string = "";
  @Input() isThirdIngredient: boolean = false;
  @Input() includeLinkToRecipes: boolean = true;
  @Input() imgFileName: string = "";
  @Input() textNameClass: string = "";
  @Input() includeMessure: boolean = false;
  @Input() measure: string | null = "";
}
