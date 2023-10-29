import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IngredientsService } from '../../services/ingridients.service';

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

  constructor(private ingredientService: IngredientsService) {}

  sendIngredientName(name: string){
    this.ingredientService.sendIngredientName.emit(name);
  }
}
