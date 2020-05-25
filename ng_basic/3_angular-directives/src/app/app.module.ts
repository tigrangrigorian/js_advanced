import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {StyleDirective} from './directives/style.directive';
import {ChangeColorOnClickDirective} from './directives/change-color-on-click.directive';
import {ChangeColorDirective} from './directives/change-color.directive';
import {HoverDirective} from './directives/hover.directive';
import {AddTextDirective} from './directives/add-text.directive';
import { MarkTextDirective } from './directives/mark-text.directive';
import { ToUpperCaseDirective } from './directives/to-upper-case.directive';
import { BorderDirective } from './directives/border.directive';


@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    ChangeColorOnClickDirective,
    ChangeColorDirective,
    HoverDirective,
    AddTextDirective,
    MarkTextDirective,
    ToUpperCaseDirective,
    BorderDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
