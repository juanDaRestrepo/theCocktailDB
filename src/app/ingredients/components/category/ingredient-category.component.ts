import { Component, Input } from '@angular/core';
import { Drinks, Ingredient, IngredientsList } from '../../interfaces/Ingredient';
import { IngredientsService } from '../../services/ingridients.service';

@Component({
  selector: 'ingredient-category',
  templateUrl: './ingredient-category.component.html',
  styleUrls: ['./ingredient-category.component.css']
})
export class IngredientCategoryComponent {
  
  @Input() 
  getCategory: string = "";

  public ingridients: Drinks[] = [];
  public classBgColorsArray = ['bg-pink', 'bg-green', 'bg-skin'];
  public categories = {
    random: "random",
    popular: "popular"
  };

  constructor(private ingredientsService: IngredientsService) { }


  ngOnInit(): void {
    this.ingredientsService.getIngredients()
      .subscribe((response: IngredientsList) => {
        if(this.getCategory === this.categories.popular){
          this.ingridients = response.drinks.slice(0, 4);
        } else {
          this.ingridients = response.drinks.slice(6, 13);
        }
      });
  }

  getBgColor(index: number) {
    const colorsArrayLength = this.classBgColorsArray.length;
    const newIndex = index % colorsArrayLength;
    console.log(this.classBgColorsArray[newIndex]);
    return this.classBgColorsArray[newIndex];
  }
}
