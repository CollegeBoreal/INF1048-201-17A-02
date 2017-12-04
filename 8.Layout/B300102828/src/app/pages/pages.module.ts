import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {ThemeModule} from '../@theme/theme.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
  ],
  declarations: [PagesComponent, DashboardComponent]
})
export class PagesModule { }
