import {CartHandlerContext} from "../../cartContext"
import {useContext} from 'react'
function Cart_Entry({name, price, quantity}){
  const {handleDelete} = useContext(CartHandlerContext)
  return (
    <li className="cart-entry">
    <img className="cart-thumbnail" src="/images/image-product-1-thumbnail.jpg"/>
      <div className="cart-name-wrapper">
        <p className="cart-name">{name}</p>
        <p className="cart-price">{price} × {quantity} <span>{price * quantity}</span></p>
      </div>
      <img onClick={() => handleDelete(1)} className="delete-icon" src="/images/icon-delete.svg" /> 
    </li>
  

    )
}
export default Cart_Entry;