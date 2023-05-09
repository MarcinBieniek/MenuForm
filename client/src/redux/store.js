import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import initialState from './InitialState';
import dishesReducer from './dishesRedux';
import thunk from 'redux-thunk';
import statusReducer from './statusRedux';

const subreducers = {
  dishes: dishesReducer,
  status: statusReducer
}

const reducer = combineReducers(subreducers)

const storeEnhancers = compose(
  applyMiddleware(thunk),
);

const store = createStore(
  reducer,
  initialState,
  storeEnhancers
);

export default store;