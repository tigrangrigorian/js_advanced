import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() index: number;

  title = 'My Card Title';
  text = 'My simple text.';

  cardDate = new Date();

  number = 42;
  fibArray = [1, 1, 2, 3, 5, 13];

  obj = {
    name: 'Bob',
    info: {
      age: 25,
      job: 'Frontend'
    }
  };
  imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  disabled = false;
  textColor: string;

  getInfo() {
    return `This is my info.`;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.imgUrl = 'https://5.imimg.com/data5/XX/XX/GLADMIN-/vuejs-development-250x250.png';
      this.disabled = true;
    }, 3000);
  }

  changeTitle() {
    this.card.title = 'Title has been changed';
  }

  inputHandler(value: any) {
    this.title = value;
  }
}


