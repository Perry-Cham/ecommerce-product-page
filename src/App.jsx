import { useState } from 'react'
import Cart from './components/cart/cart'
import Product_Card from './components/card/product_card'
import './styles.css'

function App() {
  const [cart, setCart] =useState([])
  const products = [{
    id:1,
    name:"Fall Edition Limited Sneakers",
    price:125
  }]
function handleIncrement (id) {
  const cartCopy = [...cart]
  const product = cartCopy.find((p => p.id === id));
  product.quantity += 1;
  setCart(cartCopy)
}
function handleDecrement (id) {
  const cartCopy = [...cart]
  const product = cartCopy.find((p => p.id === id));
  product.quantity -= 1;
  if(product.quantity < 1) product.quantity = 1
  setCart(cartCopy)
}
function handleDelete(){
  const cartCopy = [...cart];
  const product = cartCopy.find((p => p.id === id));
  cartCopy.splice(
    cartCopy.indexOf(p), 1)
    setCart(cartCopy)
}
function handleAdd(){
  const cartCopy = [...cart];
  const product = products.find((p => p.id === id));
  product.quantity = 1;
  cartCopy.push(product)
    setCart(cartCopy)
}
  return (
    <div>
      < NavBar 
      cart={cart}
      handleDelete={handleDelete}
      />
      < Product_Card 
      cart={cart}
      handleAdd={handleAdd}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      />
    </div>
  )
}

export default App
