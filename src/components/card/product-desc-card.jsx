function Product_Desc({ cart, handleAdd, handleIncrement, handleDecrement }) {
  return (
    <div>
      <h2>SNEAKER COMPANY</h2>
      <h3>Fall Limited Sneakers</h3>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div>
        <p className="price">$125.00</p>
        <p className="discount">50%</p>
      </div>
      <p className="price old">$250.00</p>

      <div className="cart-btn-wrapper">
        <div className="cart-handler">
          <div>
            <img className="minus" src="/images/icon-minus.svg" onClick={() => handleDecrement(1)}/>
            <p className="number">cart.length</p>
            <img className="plus" src="/images/icon-plus.svg" onClick={() => handleIncrement(1)}/>
          </div>

          <button className="cart-add-btn">
            <img className="" src="/images/icon-cart.svg" onClick={() => handleAdd(1)}></img> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Product_Desc;
