# Creating the Application's Navigation

# Add Menu

-- Add the @Nebular Menu Module to the theme.module.ts by adding `NbMenuModule`

```Typescript
const NB_MODULES = [
  ... <previous Lines>,
  NbMenuModule
];
```

-- Instantiate the (@Nebular) Menu Module through the providers block to the theme.module.ts by adding:

  `...NbMenuModule.forRoot().providers,`

. final result

```Typescript
const NB_THEME_PROVIDERS = [
  ... <previous Lines>,
  ...NbMenuModule.forRoot().providers,
];
```

* Layout

-- Generate a layout with one Column
```bash
$ ng g component pages/layout/LayoutOneColumn --inline-style true --inline-template true --spec false 
```

--- Add the following layout example (i.e. from AKVEO/Nebular) 

Notice the `select=` in the `<nb-content>` tag, these must be provided later on `(nb-menu, router-outlet)`

```Typescript
<nb-layout>
  <nb-layout-header fixed>Organisation Name</nb-layout-header>
  <nb-sidebar>
    <ng-content select="nb-menu"></ng-content>
  </nb-sidebar>
  <nb-layout-column>
    <ng-content select="router-outlet"></ng-content>
  </nb-layout-column>
  <nb-layout-footer fixed>CopyLeft</nb-layout-footer>
</nb-layout>
```

* Menu

