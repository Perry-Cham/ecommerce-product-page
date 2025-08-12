function Product_Desc({ cart }) {
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
            <img className="minus" src="/images/icon-minus.svg" />
            <p className="number">cart.length</p>
            <img className="plus" src="/images/icon-plus.svg" />
          </div>

          <button className="cart-add-btn">
            <img className="" src="/images/icon-cart.svg"></img> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Product_Desc;
