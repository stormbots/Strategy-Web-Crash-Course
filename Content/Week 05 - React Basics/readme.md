# Class Notes

## Setup

- React is an opensource javasscript library for front end web developement. Why is it called that? It reacts to changes (states) and updates the DOM (Document Object Model) accordingly.

- Enter the following in the terminal `npm create vite@latest`, choose a name for your project and package, select react, javascript, ESLint, then install with npm and start now. Press `CTRL C` to stop the app from running, then close codium and open the project folder that vite created for you back in codium.

- Enter `npm install react-router` to allow your react app to have multiple pages. Type `npm run dev` to start running the app. Hold on to `CTRL` while clicking on the localhost url to view your react app. Press `CTRL C` to stop the app from running. 

- Erase the public folder. Inside the src folder there is an assets folder. Erase its contents. Create a new folder inside the src folder named components. Create an index.jsx file inside the src folder. Erase the css inside both the app.css and index.css files. In the App.jsx file, erase the svg and png imports, the line defining a setCount state variable, and the contents of the return leaving only an empty fragment.

## Components

- Every component you create needs to be exported in the index.jsx file so that it can easily be imported and used elsewhere. Components can be nested under several layers.

- Export components in index.jsx using `export {ComponentName} from "./FileNameContainingComponent"`

- Import components using `"import {ComponentName1, ComponentName2} from "./FolderNameContainingIndexFile"`. You can import more than one component at a time.


