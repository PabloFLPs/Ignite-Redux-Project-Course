import React from 'react';
//import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux setup:
import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from './reducers';
import { Provider } from "react-redux"
import thunk from 'redux-thunk';

import { BrowserRouter } from "react-router-dom"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// As we will have multiple reducers, we can't just add all the reducers as parameter in the store.
// With this, we create a "rootReducer" that will use the "combineReducers" to put it all together:
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
)

// Fixing "Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead."
//const root = ReactDOM.createRoot(document.getElementById('root'))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
