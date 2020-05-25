import { Component } from '@angular/core';

export interface Card {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle = true;

  cards: Card[] = [
    {title: 'First Card', text: 'This is first card.'},
    {title: 'Second Card', text: 'This is second card.'},
    {title: 'The last card', text: 'This is last card'},
  ];

  toggleCards() {
    this.toggle = !this.toggle;
  }
}
