import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, productsList } from "../redux/actions/CartAction";

function Shose() {

  const { listProducts} = useSelector(
    (state) => state.productReducer
  );
  useEffect(()=> {
    dispatch(productsList())
  },[])
  const dispatch = useDispatch();
  const handleAddToCart = (payload) => {
    const styles = {
      delay: 200,
      to: [
        { opacity: 1 },
        
      ],
      from: { opacity: 0},
    }
    const count = 1;
    
    dispatch(addToCart(payload, count ,styles));
  };
  if(localStorage.getItem('product')){

  }
 

  return (
    <div className="items">
      {listProducts && listProducts.map((item,index) => (
        <div className="item" key={index}>
          <div
            style={{ backgroundColor: `${item.color}` }}
            className="item-image"
          >
            <img src={item.image} alt={item.name} />
          </div>
          <h3 className="item-name">{item.name}</h3>
          <p className="item-description">{item.description}</p>
          <div className="item-bottom">
            <div className="item-price">${item.price}</div>
            { item.isChecked? (
              <div
                className="item-button"
                onClick={() => handleAddToCart(item)}
              >
                <div className="btn-addToCart">Add To Cart</div>
              </div>
            ) : (
              <div className="item-button inactive">
                <div className="item-cover">
                  <div className="item-icon"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shose;
