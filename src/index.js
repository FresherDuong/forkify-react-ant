import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import * as serviceWorker from './serviceWorker';
import homeReducer from './store/reducers/home';
import favoritesReducer from './store/reducers/favorites';
import ingredientsReducer from './store/reducers/ingredients';
import authReducer from './store/reducers/auth';
import orderReducer from './store/reducers/order';
import historyReducer from './store/reducers/history';

// Combine all reducers into one, then remember to change 'mapStateToProps'
const rootReducer = combineReducers({
  home: homeReducer,
  favorites: favoritesReducer,
  ingredients: ingredientsReducer,
  auth: authReducer,
  order: orderReducer,
  history: historyReducer,
});

// Set up using redux chrome dev tool
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
