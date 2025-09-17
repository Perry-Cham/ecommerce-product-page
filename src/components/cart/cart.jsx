import Cart_Entry from './cart-entry'
import {useContext} from 'react'
import {CartContext, CartHandlerContext} from '../../cartContext'


function Cart(){
  const cart = useContext(CartContext)
  console.log(cart)
  return (
    <div className="cart">
      <div className="cart-header">
        <p>Cart</p>
        <img className="cart-icon" src="./images/icon-cart.svg"></img>
      </div>
      <ul className="cart-item-wrapper">
        { cart.length > 0 ? cart.map((item) => {
          return(<Cart_Entry
          key={Date.now()}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          />)
        }): 
          <div className="no-item-wrapper">
            <p className="no-item-text">Your cart is empty</p>
          </div>
        }
      </ul>
      <button className="checkout-btn">Checkout</button>
    </div>)
}

export default Cart;