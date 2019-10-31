import { RECEIVE_CURRENT_USER, LOG_OUT_CURRENT_USER } from "../actions/session_actions";


const sessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign( {}, oldState, { [action.user.id]: action.user } );
    case LOG_OUT_CURRENT_USER:
      return Object.assign({}, oldState, { [action.user.id]: null })
    default:
      return oldState;
  }
};

export default sessionReducer;