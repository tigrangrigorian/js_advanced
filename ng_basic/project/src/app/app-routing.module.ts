import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {LoginComponent} from './login/login.component';
import {EventsListComponent} from './events-list/events-list.component';


const routes: Routes = [
  // {
  //   path: '', component: MainLayoutComponent, children: [
  //     {path: '', redirectTo: '/', pathMatch: 'full'},
  //
  //   ]
  // }
  {path: 'login', component: LoginComponent},
  {path: 'events', component: EventsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
