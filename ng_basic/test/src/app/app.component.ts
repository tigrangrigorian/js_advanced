import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activePage:number = 0;

  constructor() {
  }

  displayActivePage(activePageNumber:number){
    this.activePage = activePageNumber
  }

}

// selectedFile = null;
// token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlVzZXIiLCJzck5hbWUiOiJBZG1pbjEiLCJlbWFpbCI6InVzZXIxYWRtaW5AdGVzdC5jb20iLCJwYXNzd29yZCI6InBhc3MxMjM0IiwiaXNBZG1pbiI6dHJ1ZX0.DNnbNY5waRGT_5qv6YY9QEwq3-00KJgOK6tAGKCpAYc`;
//
//
// private http: HttpClient
//
// onFileSelected(event) {
//   console.log(event);
//   this.selectedFile = event.target.files[0];
// }
//
// onUpload() {
//   const fd = new FormData();
//
//   fd.append('image', this.selectedFile, this.selectedFile.name);
//
//   this.http.post('https://volo-test.herokuapp.com/image-upload/6', fd, {
//     headers: {
//       Authorization: this.token
//     }
//   }).subscribe(res => {
//     console.log(res);
//   });
// }
