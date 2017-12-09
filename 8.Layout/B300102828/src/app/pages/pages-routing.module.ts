import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TransfertComponent} from './transfert/transfert.component';
import {HomeComponent} from './home/home.component';
import {HelpComponent} from './help/help.component';
import {PartnersComponent} from './partners/partners.component';
import {LoginComponent} from './login/login.component';
import {LanguagesComponent} from './languages/languages.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'transfert',
    component: TransfertComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'help',
    component: HelpComponent
  }, {
    path: 'partners',
    component: PartnersComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'languages',
    component: LanguagesComponent
  },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
