import { combineReducers } from 'redux'
import button from './button'
import { routerReducer as routing } from 'react-router-redux'

const app = combineReducers({
	button,
	routing
})

export default app