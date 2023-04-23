import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { detailsReducer } from "../reducers/DetailsReducer";

const reducer = combineReducers({
  detailsData: detailsReducer,
});

const initialState = {
  detailsData: {},
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
