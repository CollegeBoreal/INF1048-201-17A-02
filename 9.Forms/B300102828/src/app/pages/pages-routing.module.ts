import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {PagesComponent} from "./pages.component";
import {HelpComponent} from "./help/help.component";
import {LanguagesComponent} from "./languages/languages.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
<<<<<<< HEAD
import {ContactComponent} from "./contact/contact.component";
=======
import {ContactComponent} from './contact/contact.component';
>>>>>>> baa3f17463756f70c81e49972f1055d0141c6071


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
