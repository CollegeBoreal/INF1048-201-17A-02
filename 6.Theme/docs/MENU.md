# Creating the Application's Navigation

## Add @Nebular Menu Module

* Edit the theme.module.ts by adding `NbMenuModule`

```Typescript
const NB_MODULES = [
  ... <previous Lines>,
  NbMenuModule
];
```

* Instantiate the (@Nebular) Menu Module through the providers block to the theme.module.ts by adding:

```Typescript
const NB_THEME_PROVIDERS = [
  ... <previous Lines>,
  ...NbMenuModule.forRoot().providers,
];
```

## Let's create a fictitious `Menu`

* Add a new file called `pages-menu.ts` under `src/app/pages` with the following content:

```Typescript
import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  }
];

```




* Change Layout 

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

