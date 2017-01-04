import React from 'react';
import {render} from 'react-dom';

// import App from './components/App';
import Form from './components/Form';
import TodoList from './components/TodoList';

import App from './components/App';
import {Router,Route,IndexRoute} from 'react-router';

//Provider exxposes our store to our application and other components
import {Provider} from 'react-redux';

//Use the store
import store, {history} from './store';

const router = (
  <Provider store={store}> 
    <Router history={history}>
      <Route path="/" components={App}>
        <IndexRoute components={Form}/>
        <Route path="/todo" components={TodoList}/>
      </Route>
    </Router>
  </Provider>

)

render(router,document.getElementById('root'))