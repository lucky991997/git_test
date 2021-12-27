
import Shose from "./Shose.js";

function Products() {
 
  return (
    <div className="card">
      <div className="card-top">
        <img className="card-logo" src="../../image/nike.png" alt="logo" />
      </div>
      <div className="card-title">Our Products</div>
      <div className="card-body invisible-scrollbar">
        <div className="shop-products">
            <Shose/>
        </div>
      </div>
    </div>
  );
}

export default Products;
