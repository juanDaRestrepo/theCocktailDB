import { Component, Output, EventEmitter, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { IngredientsService } from 'src/app/ingredients/services/ingridients.service';
import { CocktailsService } from '../../../cocktails/services/cocktails.service';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: [ './search-box.component.css']
})
export class SearchBoxComponent implements OnInit{
  isFilled: boolean = false;
  ingredientName: string = "";
  
  @ViewChild('txtInput') inputElement: ElementRef | undefined;

  @Output()
  public onValue = new EventEmitter<string>();


  constructor(
    private ingredientsService : IngredientsService,
    private cocktailsService :CocktailsService
  ){}

  ngOnInit(): void {
    this.ingredientsService.sendIngredientName.subscribe((name: string) => {
      this.onIngredientName(name);
    });
  }

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.isFilled = value.length > 0;
  }

  emitValue( value: string ): void {
    this.onValue.emit( value );
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.scrollToPoint();
    }
  }

  scrollToPoint() {
    const element = document.getElementById('popular');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onIngredientName(name: string) {
    this.ingredientName = name;
    this.cocktailsService.searchCocktailByName(name)
      .subscribe( cocktail => {
        this.cocktailsService.setCocktailData(cocktail);
      })
  }  
  
}

