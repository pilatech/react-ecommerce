import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const context = React.createContext()

class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct,
        cart: [],
        modalActive: false,
        modalProduct: detailProduct,
        tax: 0,
        subTotal:0,
        total: 0
    }

    componentDidMount(){
        this.setProducts()
    }

    setProducts = () => {
        let tmpProducts = []
        storeProducts.forEach(product => {
            const singleProduct = {...product}
            tmpProducts = [...tmpProducts, singleProduct]
        })

        this.setState(() => {
            return { products: tmpProducts }
        })
    }

    findProduct = (id) => {
        const product = this.state.products.find(product => product.id === id)
        return product
    }

    handleProduct = (id) => {
       const product = this.findProduct(id)
       this.setState(() => {
           return { detailProduct: product }
       })
    }

    activateModal = (id) => {
        const product = this.findProduct(id)
        this.setState(() => {
            return {
                modalProduct: product,
                modalActive: true
            }
        })
    }

    deactivateModal = () => {
        this.setState(() => {
            return {
                modalActive: false
            }
        })
    }

    addToCart = (id) => {
       const tmpProducts = [...this.state.products] 
       const index = tmpProducts.indexOf(this.findProduct(id))
       const product = tmpProducts[index]
       product.inCart = true
       product.count = 1
       const price = product.price
       product.total = price
       this.setState(() => {
           return {
               products: tmpProducts,
               cart: [...this.state.cart, product]
           }
       }, () => this.getTotal())
    }

    increment = (id) => {
     const tmpProducts = [...this.state.products]
     const index = tmpProducts.indexOf(this.findProduct(id))
     const product = tmpProducts[index]
     product.count = product.count + 1
     product.total = product.price * product.count
     this.setState(() => {
       return { products: tmpProducts }
     }, () => {
      this.getTotal()
     })

    }

    decrement = (id) => {
     const tmpProducts = [...this.state.products]
     const index = tmpProducts.indexOf(this.findProduct(id))
     const product = tmpProducts[index]
     product.count = product.count - 1
     if(product.count === 0) {
      this.removeItem()
     } else {
     product.total = product.price * product.count
      this.setState(() => {
        return { products: tmpProducts }
      }, () => {
       this.getTotal()
      })
     }
    }

    removeItem = (id) => {
     const tmpCart = [...this.state.cart]
     const index = tmpCart.indexOf(this.findProduct(id))
     const product = tmpCart[index]
     product.inCart =  false
     product.count = 0
     const editedCart = tmpCart.filter((cart, cartIndex) => cartIndex !== index)
     this.setState(() => {
      return { cart: editedCart }
     }, () => {
      this.getTotal()
     })

    }

    clearCart = (id) => {
     this.setState(() => {
      return { cart: []}
     }, () => {
      this.setProducts()
      this.getTotal()
     })
    }

    getTotal = () => {
     let subTotal = 0
     this.state.cart.map(item => subTotal += item.total)
     let tmpTax = .1 * subTotal
     const tax = parseFloat(tmpTax.toFixed(2))
     let total = subTotal + tax
     this.setState(() => ({
      tax,
      total,
      subTotal
     }))
    }

    render() {
        return (
            <context.Provider value={{
                ...this.state,
                handleProduct: this.handleProduct,
                addToCart: this.addToCart,
                activateModal: this.activateModal,
                deactivateModal: this.deactivateModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
               { this.props.children } 
            </context.Provider>
        )
    }
}

const ProductConsumer = context.Consumer

export { ProductProvider, ProductConsumer }
