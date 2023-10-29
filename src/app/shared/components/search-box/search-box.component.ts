import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: [ './search-box.component.css']
})
export class SearchBoxComponent {
  isFilled: boolean = false;

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.isFilled = value.length > 0;
  }

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue( value: string ): void {
    console.log(value);
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
  
}

