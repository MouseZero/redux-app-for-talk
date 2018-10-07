/* global window */
import React from 'react'
import ReactDOM from 'react-dom'
import {createProvider} from 'react-redux'
import { createStore } from 'redux'

import Component from './Component'
import reducer from './Reducer'

const Provider = createProvider()
const store = createStore(reducer, {count: 0})


ReactDOM.render(
  (<Provider store={store}>
    <Component/>
  </Provider>),
  window.document.getElementById('app')
)
