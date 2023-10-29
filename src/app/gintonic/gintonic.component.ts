import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-gintonic',
  templateUrl: './gintonic.component.html',
  styleUrls: ['./gintonic.component.css']
})
export class GintonicComponent {

  shouldHideSection: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.shouldHideSection = this.shouldHideSectionLogic(event);
      }
    });
  }

  shouldHideSectionLogic(event: NavigationEnd): boolean {
    return event.url.startsWith('/cocktail/');
  }
}
