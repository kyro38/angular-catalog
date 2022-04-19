# PocCatalog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Linters

Project is formatted by Prettier & linted by `eslint`. Add custom rules by adding them in `overrides` in [.eslintrc.json](.eslintrc.json).

## NgRx

The App uses the Redux pattern with a store for state management. More on that on [ngrx.io](https://ngrx.io/guide/store).

Most of the state management files in this project are located in [`app/geo/store`](src/app/geo/store).

## Tailwind

Tailwind config is in [tailwind.config.js](tailwind.config.js).<br>
Extend the theme by adding colors for example. Using css variables will prevent duplicate definitions. See [styles.scss](src/styles.scss).

Tailwind will generate his set of classes from this config file. More on that [here](https://tailwindcss.com/docs/configuration).

About the philosophy behind Tailwind, please read [CSS Utility Classes and "Separation of Concerns"](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) by Tailwind creator, Adam Wathan.

## Material theming

Angular Material uses it's own theming. Please look at [material.scss](src/styles/material.scss)

## APi generation

The api calls & DTO models are generated by `openapi-generator-cli` and the `typescript-angular` generator. The OpenAPI definition file is [swagger.yml](src/app/api/swagger.yml).

After an definition change, you can regenerate the files by using `npm run openapi-gen`.

## VSCode Extensions

The project come with [a set](.vscode/extensions.json) of recommanded extensions. Feel free to install them to enjoy the power of VS Code.
