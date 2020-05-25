import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  // valid = this.form.get('password').touched && this.form.get('password').invalid;
  private fetchTodos: () => void;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ])
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const user = {...this.form.value};

    this.fetchTodos = () => {
      this.http.post('https://volo-test.herokuapp.com/login', user)
        .subscribe(resp => {
          console.log(resp);
        });
    };

    this.form.reset();
    console.log(user);
    this.fetchTodos();
  }

  isValid(inp) {
    return this.form.get(inp).touched && this.form.get(inp).invalid
  }
}
