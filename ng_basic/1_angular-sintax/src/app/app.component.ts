import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'Learn JavaScript', text: 'Done!', id: 1},
    {title: 'Learn Angular 8', text: 'In process.', id: 2},
    {title: 'Learn NodeJS', text: 'Did not start yet!!!', id: 3},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
