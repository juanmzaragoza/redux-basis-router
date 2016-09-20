import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './pages/App'
import Index from './pages/Index'
import Obras from './pages/Obras'

export default (
  <Route path="/" component={App}>
  	<IndexRoute component={Index}/>

  	<Route path="/obras" component={Obras}/>
  </Route>
)
