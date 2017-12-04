import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule} from '@nebular/theme';
import { LayoutOneColumnComponent } from './layout/layout-one-column/layout-one-column.component';
const BASE_MODULES = [ CommonModule, FormsModule, ReactiveFormsModule];
const NB_MODULES = [
  NbLayoutModule
  , NbSidebarModule
  , NbMenuModule
];
const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot({ name: 'default' }).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers
];
const COMPONENTS = [
  LayoutOneColumnComponent
];
@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES, CommonModule],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS],
  declarations: [LayoutOneColumnComponent]
})
export class ThemeModule  {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS],
    };
  }
}
