import Cart_Entry from './cart-entry'


function Cart({cart, handleDelete}){
  return (
    <div className="cart">
      <div className="cart-header">
        <p>Cart</p>
        <img className="cart-icon" src="./images/icon-cart.svg"></img>
      </div>
      <li className="cart-item-wrapper">
        { cart ? cart.map((item) => {
          < Cart_Entry
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          handleDelete={handleDelete}
          />
        }): 
          <div className="no-item-wrapper">
            <p className="no-item-text">Your cart is empty</p>
          </div>
        }
      </li>
      <button className="checkout-btn">Checkout</button>
    </div>)
}

export default Cart;