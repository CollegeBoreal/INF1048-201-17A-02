# Icon Libraries

## Install [ionic](http://ionicons.com/) Icons

* Install the npm package

```
$ npm install --save ionicons-npm
```

* add the stylesheet to Angular-CLI `.angular-cli.json`

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

## Install [@nebular icons](https://www.npmjs.com/package/nebular-icons) Icons

* Install the npm package

```
$ npm install --save nebular-icons
```

* add the stylesheet to Angular-CLI `.angular-cli.json`

```scss
"styles": [
...<previous lines>
        "../node_modules/nebular-icons/scss/nebular-icons.scss"
]
```

* Change the menu by adding an icon (i.e. ion-speedometer, ion-ios-keypad-outline)

```Typescript
export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    icon: 'nb-keypad',
    group: true,
  }
];
```



