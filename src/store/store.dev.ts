import { createStore, applyMiddleware, Store } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';
import { AppState } from '../state/AppState';

export const store: Store<AppState> =
  createStore(reducers, applyMiddleware(createLogger()));
//
//
// const configureStore: Store<AppState> = () => {
//   const store =
//     createStore(
//       reducers,
//       applyMiddleware(
//         createLogger()
//       )
//     )
//
//   return {
//     ...store
//   }
// }
//
// export default configureStore
