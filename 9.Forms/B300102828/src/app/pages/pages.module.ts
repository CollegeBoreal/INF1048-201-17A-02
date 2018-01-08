import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {ThemeModule} from "../@theme/theme.module";
import { HomeComponent } from './page/home/home.component';
import { TransfertComponent } from './page/transfert/transfert.component';
import { ContactComponent } from './page/contact/contact.component';
import { LanguagesComponent } from './page/languages/languages.component';
import { LoginComponent } from './page/login/login.component';
import { HelpComponent } from './page/help/help.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule
  ],
  declarations: [PagesComponent, HomeComponent, TransfertComponent, ContactComponent, LanguagesComponent, LoginComponent, HelpComponent]
})
export class PagesModule { }
