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

* Instanciate the @Nebular Module through the forRoot method of class `ThemeModule` by adding `providers: [...NB_THEME_PROVIDERS],`
```Typescript
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS],
    };
  }

```

## Enabling the Theme System to Angular Project

https://akveo.github.io/nebular/#/docs/guides/enabling-theme-system

* Edit the .angular-cli.json file and add the theme(s)

```json
"styles": [
        "../node_modules/@nebular/theme/styles/prebuilt/default.css",
      ],
```

* Create a `app/@theme/styles/themes.scss` file with a Nebular theme declaration with the below content.

```scss
// import Nebular Theme System and the default theme
@import '~@nebular/theme/styles/theming';
@import '~@nebular/theme/styles/themes/default';

// and change some variables inside of the map
$nb-themes: nb-register-theme((

  color-bg: gray,
  color-fg: white,
), default, default); // let's leave it as default
```

* Edit the styles.scss file by adding the below content

```scss
// this is your created themes.scss file, make sure the path to the file is correct
@import 'themes';

// framework component styles which will use your new theme
@import '~@nebular/theme/styles/globals';

// install the framework
@include nb-install() {
  @include nb-theme-global();
};
```

* Install ionic Icons

--- Install the package

```
$ npm install --save ionicons-npm
```

--- add the stylesheet to Angular-CLI

```scss
"styles": [
...
        "../node_modules/ionicons-npm/scss/ionicons.scss",
...
]
```

# Fixing 

ERROR `File to import not found or unreadable: ../bootstrap/scss/_functions.`

```
$ npm install  -save-dev  bootstrap-loader@^2.0.0-beta.12
```
