import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryToDrinks'
})
export class CategoryToDrinksPipe implements PipeTransform {
  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1) + ' Drinks';
  }
}