# Creating the Application's Layout

## Add the Nebular Layout and SideBar Modules to the Theme Module

-- Add @Nebular (Layout, Sidebar) Modules to the theme.module.ts

```Typescript
const NB_MODULES = [
  NbLayoutModule,
  NbSidebarModule
];
```

-- Instantiate the (@Nebular) Module through the provider's block to the theme.module.ts by adding:

  `...NbSidebarModule.forRoot().providers,`

. final result

```Typescript
const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot({ name: 'default' }).providers,
  ...NbSidebarModule.forRoot().providers,
];
```

# Create the Layout

## Generate a layout with one Column

```
$ ng g component @theme/layout/LayoutOneColumn --inline-template true --spec false 
```

--- Add the following layout example (i.e. from AKVEO/Nebular) to the LayoutOneColumn Component Template

```Typescript
    <nb-layout>
      <nb-layout-header fixed>Company Name</nb-layout-header>

      <nb-sidebar>Sidebar Content</nb-sidebar>

      <nb-layout-column>Page Content</nb-layout-column>
    </nb-layout>
```


. Final Result

```Typescript
@Component({
  selector: 'app-layout-one-column',
  template: `
    <nb-layout>
      <nb-layout-header fixed>Company Name</nb-layout-header>

      <nb-sidebar>Sidebar Content</nb-sidebar>

      <nb-layout-column>Page Content</nb-layout-column>
    </nb-layout>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class LayoutOneColumnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

## Advertize the newly created Layout

--- Add the new created Layout to the theme.module.ts 

```Typescript
const COMPONENTS = [
  LayoutOneColumnComponent
];
```

--- Export the new created components `...COMPONENTS` from `@NgModule`

```
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS],
```

. Final Result

```TypeScript
const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const NB_MODULES = [
  NbLayoutModule,
  NbSidebarModule,
];

const COMPONENTS = [
  LayoutOneColumnComponent
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot({ name: 'default' }).providers,
  ...NbSidebarModule.forRoot().providers,
];

@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS],
  declarations: [LayoutOneColumnComponent]
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
