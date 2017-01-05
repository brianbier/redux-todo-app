import React from 'react';

import {render} from 'react-dom';

// import components
import Main from './components/Main';
import FormContainer from './container/FormContainer';

import {Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store, {history} from './store';

const router = (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" components={Main}>
          <IndexRoute components={FormContainer}/>
        </Route>
      </Router>
    </Provider>
)

render(router,document.getElementById('root'));