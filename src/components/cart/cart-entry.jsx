function Cart_Entry({cart, name, price, quantity, handleDelete}){
  return (
    
    <li className="cart-entry">
      <img className="cart-thumbnail" src="/images/image-product-1"></img>
      <div>
        <p>{name}</p>
        <p>{price} × {quantity} <span>{price * quantity}</span></p>
      </div>
      <img onClick={() => handleDelet(1)} className="delete-icon" src="/images/icon-delete.svg" ></img>
    </li>
  

    )
}
export default Cart_Entry;