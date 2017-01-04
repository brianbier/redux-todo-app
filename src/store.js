import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer and data
import rootReducer from './reducers/index';

import Data from './data/tasks';


// create an object for the default data
const defaultState = {
	tasks
};

//create our store and takes two parameters, rootreducer and the default state
const store = createStore(rootReducer,defaultState);

//To keep track of where I am and include the store.
export const history = syncHistoryWithStore(browserHistory,store);
 

export default store;