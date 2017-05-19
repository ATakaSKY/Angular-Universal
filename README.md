# Ang4Seo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) 

## Development server

Run `ng run start` for a dev server. Navigate to `http://localhost:4000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g c component-name` to generate a new component. 

## Description

`app.module.ts`-

`.withServerTransition` allows Universal to replace the HTML it generated on its own.

`app.server.module.ts(new module added)`-

This is used to bootstrap the app from the server. If you compare it against `/src/app/app.module.ts`, they're very similar. The main takeaway here is that this module is for the server.

`server.ts(new file added)`-

Important thing is `renderModuleFactory` method. It takes in `AppServerModuleNgFactory` that the server generates after building the project.
Note that it's located within the standard `/dist` folder that's generated after running the `ng build` command. Then it serves it as HTML.

`tsconfig.app.json`-

 Add "angularCompilerOptions": {                             // Here
      "genDir": "./dist/ngfactory",
      "entryModule": "./src/app/app.module#AppModule"
  }  

`angularCompilerOptions` allows us to specify a genDir property, which is where the generated ngfactory files for the components and modules will go, and an entryModule which accepts the path of our main bootstrapped module. The `#AppModule` at the end of the path is the name of the exported class.

`package.json`-

Change the scripts section like this:
"scripts": {
    "prestart": "ng build --prod && ngc",
    "start": "ts-node src/server.ts"
  }


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
