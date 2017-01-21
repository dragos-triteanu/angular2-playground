# Angular2 Playground

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.25.5.

## Creating a new project
Run `ng new projectName` for creating a new project.

##Creating a component
Run `ng generate component componentName` is used to generate a new component within the `app/` folder.

Also can generate components inline by using `ng generate component componentName --flat --inline-style --inline-template`
or `ng g c componentName --flat --is --it`

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Angular2 also emulates a shadow DOM like behaviour, so that if you have two components having `<h1>`, then it won't apply the same styling to both of them.

The `ng-content` directive allows the passing of information(seems like parameterising) of components, as done in otherComponent.

