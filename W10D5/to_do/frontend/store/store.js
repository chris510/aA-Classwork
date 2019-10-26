import { createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';
import myMiddleware from '../middleware/thunk';
import { applyMiddleware, bindActionCreators } from 'redux';
import { thunk } from 'redux-thunk';

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer, 
    preloadedState,
    applyMiddleware(thunk, logger)
  );
};

export default configureStore;