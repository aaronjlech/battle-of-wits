import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import "./styles/index.css";
import App from "./containers/App";
import store from './store';

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(

   <Provider store={store}>
     <BrowserRouter>
       <App />       
     </BrowserRouter>
   </Provider>,
   document.getElementById("root")
);
registerServiceWorker();
