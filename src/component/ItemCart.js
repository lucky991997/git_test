import React from "react";
import { useDispatch } from "react-redux";
import { animated, useSpring } from "react-spring";
import {
  deleteCart,
  minusProduct,
  plusProduct,
} from "../redux/actions/CartAction";

export default function ItemCart(props) {
  const { item } = props;
  
  const stylesCart = useSpring(item.stylesCart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    const styles = {
       
        delay: 300,
        to: [
          { opacity: 1 },
        ],
        from: { opacity: 1},
      }
    dispatch(deleteCart(id , styles));
  };

  const handlePlus = (id) => {
    dispatch(plusProduct(id));
  };

  const handleMinus = (id) => {
    dispatch(minusProduct(id));
  };
  return (
    <animated.div style={stylesCart} className="cart-item">
      <div className="cart-item-left">
        <div
          className="cart-item-image"
          style={{ backgroundColor: `${item.color}` }}
        >
          <div className="cart-item-img" style={{ color: `${item.color}` }}>
            <img src={item.image} alt={item.name} />
          </div>
        </div>
      </div>
      <div className="cart-item-right">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">{item.price}</div>
        <div className="cart-item-actions">
          <div className="cart-item-count">
            <div
              className="cart-item-count-button"
              onClick={() => {
                handleMinus(item.id);
              }}
            >
              <img src="../../image/minus.png" alt="" />
            </div>

            <div className="cart-item-count-number">{item.count}</div>

            <div
              className="cart-item-count-button"
              onClick={() => {
                handlePlus(item.id);
              }}
            >
              <img src="../../image/plus.png" alt="" />
            </div>
          </div>
          <div
            className="cart-item-remove"
            onClick={() => {
              handleRemove(item.id);
            }}
          >
            <img src="../../image/trash.png" alt="trash" />
          </div>
        </div>
      </div>
      </animated.div>
  );
}
