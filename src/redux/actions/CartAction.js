import {
  ADD_TO_CART,
  DELETE_CART,
  MINUS_PRODUCT,
  PLUS_PRODUCT,
  PRODUCT_LIST,
} from "../constans/cartConstant";
import shose from "../../data.js";

export const productsList = () => (dispatch,getState) =>{
    dispatch({
      type:PRODUCT_LIST,
      payload:shose,
    })
    return localStorage.setItem("products", JSON.stringify(getState().productReducer.products));
  
}

export const addToCart = (item, count, styles, isChecked = false) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: {
      ...item,
      count,
      isChecked,
    },
    styles
  });

  return localStorage.setItem("products", JSON.stringify(getState().productReducer.products));
  
};
export const deleteCart = (payload, styles, isChecked = true) => (dispatch, getState) => {
  dispatch({
    type: DELETE_CART,
    payload: {
      payload,
      isChecked, 
    },
    styles
     
  });
  return localStorage.setItem("products", JSON.stringify(getState().productReducer.products));
  
};
export const plusProduct = (payload) => (dispatch, getState) => {
  dispatch({
    type: PLUS_PRODUCT,
    payload,
  });

  return localStorage.setItem("products", JSON.stringify(getState().productReducer.products));
  
};
export const minusProduct = (payload,isChecked = true) => (dispatch, getState) => {
  dispatch({
    type: MINUS_PRODUCT,
    payload: {
      payload,
      isChecked 
    }
  });
  return localStorage.setItem("products", JSON.stringify(getState().productReducer.products));
  
};
