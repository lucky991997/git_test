import {useSpring , animated} from 'react-spring'


import {
  ADD_TO_CART,
  DELETE_CART,
  MINUS_PRODUCT,
  PLUS_PRODUCT,
  PRODUCT_LIST,
} from "../constans/cartConstant";

 const initialState = {
  listProducts: [],
  products: [],
  plus: true,
  minus: false,
 
};

export const productReducer = (state = initialState, action) => {
  const productsListUpdate = () => {
    const productsListUpdate = [...state.listProducts];
    console.log(productsListUpdate)
    return productsListUpdate;
  };
  const itemListIndex = (item) => {
    const index = productsListUpdate().findIndex((x) => x.id === item.id);
    return index;
  };
  const productsUpdate = () => {
    const productsUpdate = [...state.products];
    return productsUpdate;
  };
  const itemIndex = (item) => {
    const index = productsUpdate().findIndex((x) => x.id === item.id);
    return index;
  };


  
  switch (action.type) {
    case PRODUCT_LIST:
      return {
        ...state,
        listProducts: action.payload,
      
      };
    case ADD_TO_CART:
      if (itemListIndex(action.payload) !== -1) {
        productsListUpdate()[itemListIndex(action.payload)].isChecked =
          action.payload.isChecked;
      }
      state.listProducts = productsListUpdate();
      // let index = productsUpdate().itemIndex((x) => x.id === action.payload.id);
      // if(itemIndex(action.payload) !== -1) {
      //   productsUpdate()[itemIndex(action.payload)].count +=1
      //   return { ...state, products: productsUpdate() };
      // }
    
      if (itemIndex(action.payload) !== -1) {
        productsUpdate()[itemIndex(action.payload.count)].count += 1;
        // state.products = prUpdate
        return { ...state, products: productsUpdate() };
      } else {
        return {
          ...state,
          products: [...state.products, action.payload],
          styles: action.styles,
        };
      }

    case DELETE_CART:
      const deleteChangeButton = productsListUpdate().find(
        (x) => x.id === action.payload.payload
      );
      deleteChangeButton.isChecked = action.payload.isChecked;

      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.payload
        ),
        styles: action.styles,
        listProducts: [...state.listProducts, deleteChangeButton],
      };

      // case DELETE_CART:
      // const deleteChangeButton = productsListUpdate().find(
      //   (x) => x.id === action.payload.payload
      // );
      // deleteChangeButton.isChecked = action.payload.isChecked;
      // const prUpdate = [...state.products]
    
      // const index = prUpdate.find((x) => x.id === action.payload.payload);
      //  if(index) {
      //   prUpdate.splice(index,1)
      //  }
      // return {
      //   ...state,
      //   products: prUpdate,
      //   listProducts: [...state.listProducts, deleteChangeButton],
      // };
      
    case PLUS_PRODUCT:
      let cartUpdate = [...state.products];

      const itemExist = state.products.findIndex(
        (x) => x.id === action.payload
      );

      if (itemExist !== -1) {
        cartUpdate[itemExist].count += 1;
      }
      state.products = cartUpdate;

      return {
        ...state,
      };
    case MINUS_PRODUCT: {
      let cartUpdate = [...state.products];
      const itemExist = state.products.findIndex(
        (x) => x.id === action.payload.payload
      );
      if (itemExist !== -1) {
        cartUpdate[itemExist].count += -1;
        if (cartUpdate[itemExist].count <= 0) {
          const minusChangeButton = productsListUpdate().find(
            (x) => x.id === action.payload.payload
          );
          minusChangeButton.isChecked = action.payload.isChecked;

          return {
            ...state,
            products: cartUpdate.filter((x) => x.id !== action.payload.payload),
            listProducts: [...state.listProducts, minusChangeButton],
          };
        }
      }
      state.products = cartUpdate;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

