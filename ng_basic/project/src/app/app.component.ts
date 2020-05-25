import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) {
  }

  title = 'project';
  fetchTodos;

  ngOnInit(): void {
    this.router.navigate(['/login']);


    // tslint:disable-next-line:no-unused-expression

  }
}
