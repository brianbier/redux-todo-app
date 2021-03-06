import React from 'react';

import {render} from 'react-dom';

// import components
import App from './components/App';
import FormContainer from './container/FormContainer';

import {Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store, {history} from './store';

const router = (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" components={App}>
          <IndexRoute components={FormContainer}/>
        </Route>
      </Router>
    </Provider>
)

render(router,document.getElementById('root'));