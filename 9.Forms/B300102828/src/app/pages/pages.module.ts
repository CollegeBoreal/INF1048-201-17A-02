import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {ThemeModule} from "../@theme/theme.module";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LanguagesComponent } from './languages/languages.component';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import {TransfertModule} from "./transfert/transfert.module";

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    TransfertModule
  ],
  declarations: [PagesComponent, HomeComponent, ContactComponent, LanguagesComponent, LoginComponent, HelpComponent]
})
export class PagesModule { }
