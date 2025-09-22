import {useState} from 'react'
import Cart from "./cart/cart";
function NavBar() {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [navIsOpen, setNavIsOpen] = useState(false)
  return (
    <header className="header">
      <div className="logo-wrapper">
        <img className="icon menu" src="/images/icon-menu.svg" alt="menu-icon" onClick={() => setNavIsOpen(!navIsOpen)}/>
        <img className="logo" src="/images/logo.svg" />
        <nav className="desktop navigation">
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
        <img className="cart-icon" src="/images/icon-cart.svg" onClick={() => {
        console.log(cartIsOpen)
        setCartIsOpen(!cartIsOpen)}}/>
        <img className="avatar-img" src="/images/image-avatar.png" />
      </div>
     { cartIsOpen  && <Cart />}
    {navIsOpen && <>
       <nav className="mobile navigation">
        <img className="icon close" src="/images/icon-close.svg" onClick={() => setNavIsOpen(!navIsOpen)}/>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div aria-hidden className="background-dimmer"></div>
    </>}
    </header>
  );
}
export default NavBar;
