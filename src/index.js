import React from 'react';

import {render} from 'react-dom';

// import components
import Main from './components/Main';
import TodoList from './components/TodoList';
import FormContainer from './container/FormContainer';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const router = (
    <Router history={browserHistory}>
      <Route path="/" components={Main}>
        <IndexRoute components={FormContainer}/>
      </Route>
    </Router>
)

render(router,document.getElementById('root'));