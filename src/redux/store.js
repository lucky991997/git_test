import { createStore, compose, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";

import { productReducer } from "../redux/reducer/productReducer";

const initialState = {
  productReducer: {
    products: localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [],
 
  },
};
const reducer = combineReducers({
  productReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
