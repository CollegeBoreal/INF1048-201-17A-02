

# Enabling the Theme System to Angular Project

https://akveo.github.io/nebular/#/docs/guides/enabling-theme-system

## Adding the Theme

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
@import './app/@theme/styles/themes';

// framework component styles which will use your new theme
@import '~@nebular/theme/styles/globals';

// install the framework
@include nb-install() {
  @include nb-theme-global();
};
```

## Adding some icons

* Install [ionic](http://ionicons.com/) Icons

--- Install the package

```
$ npm install --save ionicons-npm
```

--- add the stylesheet to Angular-CLI `.angular-cli.json`

```scss
"styles": [
...<previous lines>
        "../node_modules/ionicons-npm/scss/ionicons.scss"
]
```

* Change the menu by adding an icon (i.e. ion-speedometer, ion-ios-keypad-outline)

```Typescript
export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'ion ion-speedometer',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    icon: 'ion ion-ios-keypad-outline',
    group: true,
  }
];
```
