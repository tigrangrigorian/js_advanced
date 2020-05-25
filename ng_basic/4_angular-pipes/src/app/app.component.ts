import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  e: number = Math.E;
  float = 0.42;
  str = 'hello world';
  date1 = new Date();
  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  };

  search = '';
  searchField = 'title';

  arr = [
    {name: 'Bob', age: 20},
    {name: 'Mike', age: 16},
    {name: 'Jim', age: 30},
    {name: 'Sam', age: 14},
  ];

  posts: Post[] = [
    {title: 'Beer', text: 'The best beer of the world!!!'},
    {title: 'Bread', text: 'The best bread of the world!!!'},
    {title: 'JavaScript', text: 'The best language of the world!!!'},
  ];
  promise: Promise<string> = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 4000);
  });

  date: Observable<Date> = new Observable<Date>((obs) => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  anotherDate: Date;

  ngOnInit(): void {
    this.date.subscribe(date => {
      this.anotherDate = date;
    });
  }


  addPost() {
    this.posts.unshift({
      title: 'Person',
      text: 'My name is Tigran.'
    });
  }

}

