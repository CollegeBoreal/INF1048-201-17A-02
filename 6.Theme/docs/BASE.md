# Module Construction

Create the Theme Module

```bash
$ ng generate module @theme/Theme --flat
```

# Add the base modules

Edit themes.modules.ts

```Typescript
const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
```

* Import and Export the base modules through `@NgModule`

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

# Module Usage

* Import [instantiate] the module through `@NgModule` of app.module.ts

```Typescript
    ThemeModule.forRoot(),
```

* import the module through `@NgModule` of any subsequent modules for usage

```Typescript
    ThemeModule,
```
