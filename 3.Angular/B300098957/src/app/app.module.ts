import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
