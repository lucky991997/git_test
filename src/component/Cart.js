
import { useSelector } from "react-redux";

import ItemCart from "./ItemCart";

function Cart() {
  const { products, styles } = useSelector((state) => state.productReducer);
  const stylesCart = styles;
  console.log(stylesCart)
  console.log(products)
  console.log(styles)
 
  const product = () => {
    if (products) {
      const item = products.map((item, index) => {
        const productTest = { ...item, stylesCart };
        return productTest;
      });
      return item;
    }
  };

  const handleTotal = () => {
    return products.reduce((acc, cur) => acc + cur.price * cur.count, 0);
  };

  return (
    <div className="card">
      <div className="card-top">
        <img className="card-logo" src="../../image/nike.png" alt="logo" />
      </div>
      <div className="card-title">
        Your cart
        <span style={{ float: "right" }}>${handleTotal().toFixed(2)}</span>
      </div>

      <div className="card-body invisible-scrollbar">
        {product() && product().length === 0 ? (
          <h1>Cart empty</h1>
        ) : (
          product().map((item) => (
            <div className="cart-items" key={item.id}>
                <ItemCart item={item} key={item.id} />
            </div>
            
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
