import { RECEIVE_BENCHES} from '../actions/bench_actions';

const benchesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BENCHES:
      // return Object.assign({}, action.benches)
      return action.benches
    default:
      return state;
  }
};

export default benchesReducer;