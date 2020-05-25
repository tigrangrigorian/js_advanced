import {Component, forwardRef, OnInit, Provider} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {SwitchComponent} from './switch/switch.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent{

  appState = 'off';

  handeleChange() {
    console.log(this.appState);
  }
}

