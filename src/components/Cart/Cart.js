import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import CartEmpty from './CartEmpty'
import { ProductConsumer } from '../../context'
import CartContainer from './CartContainer'
import CartTotals from './CartTotals'


export default class Cart extends Component {
    render() {
        return (
            <section>
               <ProductConsumer>
                {value => {
                 const { cart } = value
                 if(cart.length > 0){
                  return(
                   <React.Fragment>
                     <Title name="your" title="cart"/>
                     <CartColumns/>
                     <CartContainer value={value}/>
                     <CartTotals value={value}/>
                   </React.Fragment>
                  )
                 } else {
                  return (
                   <CartEmpty/>
                  )
                 }
                }}
               </ProductConsumer>
            </section>
        )
    }
}
