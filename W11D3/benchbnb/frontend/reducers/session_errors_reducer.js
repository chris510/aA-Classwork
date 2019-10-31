import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      console.log('error reducer');
    default:
      return oldState;
  }
}

export default sessionErrorsReducer;