import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './Checkout.scss';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../components/StripeButton/StripeButton';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';

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
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))}
        <div className='total'>
            <span>TOTAL: ${total}</span> 
        </div>
        <div className='testWarning'>
            *Please use the following credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/25 - CCV: 123
        </div>
        <StripeButton price={total} /> 
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);