import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./_helpers";

import registerServiceWorker from "./registerServiceWorker";

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';

// import { store } from './_helpers';
// import { App } from './App';
// import registerServiceWorker from "./registerServiceWorker";

// // setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

// render(
//     <Provider store={store}>
//         <App />
        
//     </Provider>,
//     document.getElementById('root')
// );
// registerServiceWorker();
