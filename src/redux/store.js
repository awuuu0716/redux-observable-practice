import { createStore,combineReducers,applyMiddleware } from 'redux';
import reducer from './reducer';

import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './epics'

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({test:reducer})

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );
  epicMiddleware.run(rootEpic)
  return store
}

// export const store = createStore(rootReducer,applyMiddleware(epicMiddleware));