# Module Construction

Create the Theme Module

```bash
$ ng generate module @theme/Theme --flat
```

# Add the base modules

Edit themes.modules.ts

add a new variable BASE_MODULES before the `@NgModule` Decorator

```Typescript
const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
```

* Import and Export the base modules through `@NgModule` Decorator

```Typescript
  imports: [...BASE_MODULES],
  exports: [...BASE_MODULES],
```

* add the forRoot method to the class ThemeModule

```Typescript
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
    };
  }

```

. Final Result should look like this

```Typescript
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

# Module Usage

* Import [instantiate] the module through `@NgModule` of app.module.ts

```Typescript
    ThemeModule.forRoot(),
```

* import the module through `@NgModule` of any subsequent modules for usage

```Typescript
    ThemeModule,
```
