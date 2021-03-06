import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import './checkout.styles.scss'

const CheckoutPage = ({cartItems,total}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-blcok'>
        <span>Product</span>
      </div>
      <div className='header-blcok'>
        <span>Description</span>
      </div>
      <div className='header-blcok'>
        <span>Quanitty</span>
      </div>
      <div className='header-blcok'>
        <span>Price</span>
      </div>
      <div className='header-blcok'>
        <span>Remove</span>
      </div>
    </div>

  {
    cartItems.map(cartItem =>
      cartItem.name)
  }
  <div className='total'>
    <span>TOTAL: ${total}</span>
  </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps,null)(CheckoutPage)
