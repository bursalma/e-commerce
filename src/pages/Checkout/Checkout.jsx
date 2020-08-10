import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './Checkout.scss';

import { selectCartItems } from '../../redux/cart/cartSelectors'
import { selectCartTotal } from '../../redux/cart/cartSelectors'

const Checkout = ({ cartItems, total }) => (
    <div className='Checkout'>
        <div className='checkoutHeader'>
            <div className='headerBlock'>
                <span>Product</span>
            </div>
            <div className='headerBlock'>
                <span>Description</span>
            </div>
            <div className='headerBlock'>
                <span>Quantity</span>
            </div>
            <div className='headerBlock'>
                <span>Price</span>
            </div>
            <div className='headerBlock'>
                <span>Remove</span>
            </div>
        </div>
        <div>
            {cartItems.map(cartItem => cartItem.name)}
        </div>
        <div className='total'>
            <span>TOTAL: ${total}</span> 
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);