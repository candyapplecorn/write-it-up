import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = { currentUser: null, errors: [] };

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch (action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.user })
    default:
      return state;
  }
};

export default sessionReducer;