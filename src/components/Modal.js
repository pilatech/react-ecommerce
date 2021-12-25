import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import styled from 'styled-components'
import { Button } from './Button'
import { Link } from 'react-router-dom'

export default class Modal extends Component {
    render() {
        return (
           <ProductConsumer>
               {
                   (value) => {
                       const { modalActive, deactivateModal } = value
                       const { img, title, price } = value.modalProduct

                       if(!modalActive){
                           return null
                       } else {
                           return (
                             <ModalContainer>
                                 <div className="container">
                                     <div className="row">
                                       <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <h5>Item added to the cart</h5>
                                        <img src={img} className="img-fluid" alt="product"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price: ${price}</h5>
                                        <Link to="/">
                                         <Button
                                         onClick={() => deactivateModal()}
                                         >
                                           shop
                                         </Button>
                                        </Link>
                                        <Link to="/cart">
                                         <Button
                                         cart
                                         onClick={() => deactivateModal()}
                                         >
                                           cart
                                         </Button>
                                        </Link>
                                           </div> 
                                     </div>
                                 </div>
                             </ModalContainer>  
                           )
                       }
                   }
               }
           </ProductConsumer> 
        )
    }
}


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
   background: var(--mainWhite);
  }
`