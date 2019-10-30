
const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  // const newState = Object.assign({}, state)
  switch (action.type) {
    default:
      return state;
  }
}

export default uiReducer;