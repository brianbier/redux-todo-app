import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';



// import the root reducer and data
import rootReducer from './reducers/index';

// import tasks from './data/tasks';

const loggerMiddleware = createLogger();

// create an object for the default data
// const defaultState = {
// 	tasks
// }

//create our store and takes two parameters, rootreducer and the default state
const store = createStore(rootReducer,
                          applyMiddleware(
                            thunkMiddleware,
                            loggerMiddleware));

//To keep track of where I am and include the store.
export const history = syncHistoryWithStore(browserHistory,store);
 

export default store;