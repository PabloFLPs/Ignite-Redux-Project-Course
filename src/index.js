import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux setup:
import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from './reducers';
import { Provider } from "react-redux"
import thunk from 'redux-thunk';

import { BrowserRouter } from "react-router-dom"

// createRoot React 18:
import { createRoot } from "react-dom/client";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// As we will have multiple reducers, we can't just add all the reducers as parameter in the store.
// With this, we create a "rootReducer" that will use the "combineReducers" to put it all together:
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
)

// Fixing "Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead."
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
