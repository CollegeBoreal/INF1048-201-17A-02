import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {ThemeModule} from '../@theme/theme.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransfertComponent } from './transfert/transfert.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { LanguagesComponent } from './languages/languages.component';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
  ],
  declarations: [PagesComponent, DashboardComponent, TransfertComponent, LoginComponent, HomeComponent, PartnersComponent, ContactComponent, HelpComponent, LanguagesComponent]
})
export class PagesModule { }
