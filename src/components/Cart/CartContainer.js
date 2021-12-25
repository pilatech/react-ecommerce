import React from 'react'
import CartItem from './CartItem'

export default function CartContainer({value}) {
 const { cart } = value
 const cartItems = cart.map(item => (
  <CartItem key={item.id} item={item} value={value}/>
 ))
 return (
  <div className="container-fluid">
    {cartItems}
  </div>
 )
}
