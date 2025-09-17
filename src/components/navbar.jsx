import {useContext, useState} from 'react'
import Cart from "./cart/cart";
import {CartContext} from "../cartContext"
function NavBar() {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const cart = useContext(CartContext)
  console.log(cart)
  return (
    <header className="header">
      <div className="logo-wrapper">
        <img className="logo" src="/images/logo.svg" />
        <nav className="navigation">
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      <div className="cart-avatar-wrapper">
        <img className="cart-icon" src="/images/icon-cart.svg" onClick={() => setCartIsOpen(!cartIsOpen)}/>
        <img className="avatar-img" src="/images/image-avatar.png" />
      </div>
     { cartIsOpen  && <Cart />}
    </header>
  );
}
export default NavBar;
