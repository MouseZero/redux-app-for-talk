/* global window */
import React from 'react'
import ReactDOM from 'react-dom'
import { createProvider } from 'react-redux'
import { createStore } from 'redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import User from './User'

import Template from './Template'
import Main from './Main'
import reducer from './Reducer'
import Form from './Form'

const Provider = createProvider()
const pluginEnhancment = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
  reducer, {
    fields: {
      username: '',
      password: '',
      email: '',
      what: '',
      where: ''
    }
  },
  pluginEnhancment
)


ReactDOM.render(
  <Provider store={store}>
    <Router >
      <Template>
        <Route exact path="/" component={Main} />
        <Route exact path="/user" component={User} />
        <Route exact path="/form" component={Form} />
      </Template>
    </Router>
  </Provider>,
  window.document.getElementById('app')
)
