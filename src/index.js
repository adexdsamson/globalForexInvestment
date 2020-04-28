import React from "react";
import ReactDOM from "react-dom";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import rootReducer from './store/reducer';
let themes = createMuiTheme();
let theme = responsiveFontSizes(themes);

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
