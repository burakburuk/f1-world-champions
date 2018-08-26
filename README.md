F1 World Champions

In order to run project, run following commands
npm install
npm run start

Then it will automatically start the project from 3000 port and it will open default browser.

React is used for managing components.
Redux is used for single source of truth and managing states since state management is not easy without an external framework.
Redux-saga middleware is used for async operations instead of thunk since it uses callback, cannot be tested and promises cannot be canceled. Material ui 1.3 is used for react ui components since it is stable and. Create-react-app is used for template project since it is easy to configure. (Webpack, express, babel, etc)

It is a single page application that presents a list that shows the F1 world champions starting from 2005 until 2015 in descending order. When you click on an item on the list, it shows the list of the winners for every race for the selected year and also highlight the row when the winner has been the world champion in the same season.
