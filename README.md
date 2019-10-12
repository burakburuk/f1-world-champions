# README

- F1 World Champions

This is a single page application that presents a list that shows the F1 world champions starting from 2005 until 2015 in descending order. When you click on an item on the list, it shows the list of the winners for every race for the selected year and also highlight the row when the winner has been the world champion in the same season.

React is used for managing components.
Redux is used for single source of truth and managing states since state management is not easy without an external framework.
Redux-saga middleware is used for async operations instead of thunk since it uses callback, cannot be tested and promises cannot be canceled.

## Dependencies and Dev-dependencies

Nodejs and npm for development environment and package management.
Webpack -> dependency management and bundling
Babel -> transpiling to ES5
Styled components -> CSS in JS.
React -> main UI view library.
Redux -> store and data management.
Saga -> Async middleware.

All related task are described in the webpack.config.js

Run following command in order to install all the dependencies:

`npm install`

## Run The App in a Development Mode

Start application in development mode: Go into application folder and run following command. Then it will automatically start the project from 3000 port and it will open default browser. It will also start listening changes in the code and reload changed files on save.

`npm start`

## Build the App for production

Production build: Go into application folder and run following command.

`npm build`

## How to Run the Test

Unit Testing with Jest: Go into application folder and run following command.

`npm test`

E2e Testing with cypress.io: Go into e2e-tests folder and run following command. Make sure that App is running locally.

`npm start`

## Directories and Files Description

package.json : Server-side dependencies.

/application : Source Code

/scripts/webpack.config.js: Webpack tasks are specified and described in there.
/scripts/jest.init.js: Jest initial configurations.

/application/actions: includes action creators for dispatching redux actions.
/application/assets: External Files : images.
/applicationlication/components: includes presentational components for rendering views.
/application/constants: includes routes for server requests and action types for action creators.
/applicationlication/containers: includes container components managing presentational components.
/applicationlication/reducers: includes reducers for updating store.
/applicationlication/sagas: includes sagas managing async operations.
/applicationlication/services: includes services managing service calls and handling errors.
/applicationlication/store: includes application state object.
/applicationlication/utils: includes common utility functions.
/application/index.html: entry html file for loading SPA.
/application/index.js: entry javascript file.
/application/index.scss: common scss file.

/application/dist: Distruibuition src code for production releases
