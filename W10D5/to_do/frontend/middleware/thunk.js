import { applyMiddleware, bindActionCreators } from 'redux';

// const myMiddleware = (store) => (next) => (action) =>  {
//   if (typeof action === 'function') {
//     return action(store.dispatch);
//   } else {
//     return next(action);
//   }
// };

// export default myMiddleware