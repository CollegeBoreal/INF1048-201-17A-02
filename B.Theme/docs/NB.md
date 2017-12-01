
# @Nebular Theme Module AddOn

## Installing dependencies

### Install Nebular modules (along with dependencies [i.e. Bootstrap]:

```
$ npm install --save @nebular/theme bootstrap@4.0.0-alpha.6
```

## Configuring in themes.modules.ts

-- Add a constant for the new Candidate Modules (i.e. NbMenuModule, NbSideModule, ...) that will be added later on.

```Typescript
const NB_MODULES = [
];
```

-- Add a constant for instantiating the main @Nebular module and other potiential modules

```Typescript
const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot({ name: 'default' }).providers
];
```


* Import `AND` Export the @Nebular modules through `@NgModule` by adding `...NB_MODULES`
```Typescript
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES],
```

* Instanciate the @Nebular Module through the forRoot method of class `ThemeModule` 

by adding `providers: [...NB_THEME_PROVIDERS],`

```Typescript
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS],
    };
  }

```

. Final Result should look like this

```Typescript
import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NbThemeModule} from '@nebular/theme';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const NB_MODULES = [
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot({ name: 'default' }).providers
];

@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES],
  declarations: []
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS],
    };
  }
}
```
