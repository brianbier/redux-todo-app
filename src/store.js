import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers';

const defaultState = {
	tasks: []
}

const enhancers = compose(
  window.devToolsExtension? window.devToolsExtension() : f => f
);

// /Create a store 
//Takes the root reducer is how we will interface with the store and the default state
const store = createStore(rootReducer,defaultState,enhancers);

//To keep track of where I am and include the store.
export const history = syncHistoryWithStore(browserHistory,store);


export default store;