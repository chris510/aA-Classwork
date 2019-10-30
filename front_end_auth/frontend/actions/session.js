import { postUser, postSession, deleteSession } from "../utils/session";

//if the action type does not match, just says it doesn't match intead of throwing an error
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logOutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const createNewUser = (formUser) => (dispatch) => postUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logIn = (formUser) => (dispatch) => postSession(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logOut = () => (dispatch) => deleteSession
  .then( () => dispatch(logOutCurrentUser()));