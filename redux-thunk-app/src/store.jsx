// src/store.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // Ensure this import is correct
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
