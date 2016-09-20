import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import configureStore from './store/configureStore'

import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'

import Index from './pages/Index'

//assets y estilos
import './public/css/bastrap3/bootstrap.min.css'
import './public/css/bastrap3/bastrap.css'
import './public/css/bastrap3/style.css'
import './public/css/participacion_ciudadana.css'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('app')
)
