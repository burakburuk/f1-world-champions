F1 World Champions

In order to run project, run following commands
npm install
npm run start

Then it will automatically start the project from 3000 port and it will open default browser.


For the architectural choices I made;

I used react for managing components since I currently use it in my projects.
I used redux for single source of truth and managing states since state management is not easy without redux.
I used redux-saga middleware for async operations instead of thunk since it uses callback.
I used material ui 1.3 for react ui components since it is stable and used to do.
I used create-react-app for template project since it is easy to configure. (Webpack, express, babel, etc)

Regarging to requirements;
I've developed a single page application that presents a list that shows the F1 world champions starting from 2005 until 2015 in descending order. When you click on an item on the list, it shows the list of the winners for every race for the selected year and also highlight the row when the winner has been the world champion in the same season.
