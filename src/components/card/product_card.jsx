import Product_Desc from "./desc";
import Product_Card_Gallery from "./gallery";

function Product_Card({ cart, handleAdd, handleIncrement, handleDecrement }) {
  return (
    <div className="product-card">
      <Product_Card_Gallery />

      <Product_Desc
        cart={cart}
        handleAdd={handleAdd}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
export default Product_Card;
/*
 */
