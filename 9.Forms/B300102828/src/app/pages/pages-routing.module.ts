import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {PagesComponent} from "./pages.component";
import {HelpComponent} from "./help/help.component";
import {LanguagesComponent} from "./languages/languages.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component"
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'transfert',
    loadChildren: './transfert/transfert.module#TransfertModule'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'help',
    component: HelpComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'languages',
    component: LanguagesComponent
  }, {
    path: 'contact',
    component: ContactComponent
  },
    {
      path: 'Contact',
      component: ContactComponent
    },
  ]
}];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
