import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

// tslint:disable-next-line:class-name
interface controlObject {
  [key: string]: boolean;
}
export class MyValidators {

  static restrictEmails(control: FormControl): controlObject {
    if (['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
      return {restrictedEmail: true};
    }
    return null;
  }

  static test(console: FormControl): controlObject {
    // @ts-ignore
    if (new Date(console) < new Date()) {
      return {restrictedDate: true};
    }
    return null;
  }

  static uniqEmail(control: FormControl): Promise<controlObject> | Observable<controlObject> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({uniqEmail: true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
