import Cart from "./cart/cart";
function NavBar({ cart }) {
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
        <img className="cart-icon" src="/images/icon-cart.svg" />
        <img className="avatar-img" src="/images/image-avatar.png" />
      </div>
      <Cart />
    </header>
  );
}
export default NavBar;
