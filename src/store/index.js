import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { detailsReducer } from '../reducers/DetailsReducer';

const persistConfig = {
  key: 'persist-store',
  storage,
};

const reducer = combineReducers({
  detailsData: detailsReducer,
});

const initialState = {
  detailsData: {},
};
const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(...middleware)
);

export const persistor = persistStore(store);
export default store;
