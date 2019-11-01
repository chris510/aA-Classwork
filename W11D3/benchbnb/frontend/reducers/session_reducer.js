import { RECEIVE_CURRENT_USER, LOG_OUT_CURRENT_USER } from "../actions/session_actions";

const _nullSession = {
  id: null,
}

const sessionReducer = (oldState = _nullSession, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign( {}, { id: action.user.id } )
    case LOG_OUT_CURRENT_USER:
      // return Object.assign({}, { [action.user.id]: null });
      return _nullSession;
    default:
      // return Object.assign({}, oldState, { [action.user.id]: null })
      return oldState
  }
};

export default sessionReducer;