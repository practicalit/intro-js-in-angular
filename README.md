# How to use IntroJS in angular

First install the package on the angular app

`npm install intro.js @types/intro.js --save`

Then go to angular.json file and make it look like the following

```javascript
    "styles": [
        "src/styles.css",
        "node_modules/intro.js/introjs.css"
    ],
    "scripts": [
        "node_modules/intro.js/intro.js"
    ]
```

## How to run

Follow what is added in the app.component.ts and app.component.html