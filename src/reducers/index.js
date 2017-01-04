import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import Tasks from './Tasks'

const rootReducer = combineReducers({tasks: Tasks,routing: routerReducer});

export default rootReducer;