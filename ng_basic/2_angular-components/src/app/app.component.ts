import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'Learn JavaScript', text: 'Done', id: 1},
    {title: 'Learn Angular 8', text: 'In process', id: 2},
    // {title: 'Learn NodeJS', text: 'Did not began yet.', id: 3}
  ];

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('TimeOut');
    //   this.posts[0].title = 'Changed';
    // }, 5000);
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
    // console.log('Post' , post);
  }

  removePost(id: number) {
    console.log(id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
