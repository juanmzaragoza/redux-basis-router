import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'

export const toggleState = () => {
	return {
		type: types.TOGGLE_STATE
	}
}