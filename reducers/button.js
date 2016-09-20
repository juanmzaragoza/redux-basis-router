import {TOGGLE_STATE} from '../constants/ActionTypes'

const initialState = {
	active: false
}

export default function button(state = initialState, action) {
  	switch (action.type) {
    	case TOGGLE_STATE:
      		return Object.assign({}, state, {
        		active: !state.active
      		})

    	default:
      		return state
  	}
}