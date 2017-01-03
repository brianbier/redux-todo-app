import React from 'react';
import {render} from 'react-dom';

// import App from './components/App';
import Form from './components/Form';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

import App from './components/App';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';

//Provider exxposes our store to our application and other components
import {Provider} from 'react-redux';

const router = (
  <Provider>
    <Router history={browserHistory}>
      <Route path="/" components={App}>
        <IndexRoute components={Form}/>
        <Route path="/todo" components={Todo}/>
      </Route>
    </Router>
  </Provider>

)

render(router,document.getElementById('root'))