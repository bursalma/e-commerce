import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './CartDropdown.scss';

import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import { selectCartItems } from '../../redux/cart/cartSelectors'

const CartDropdown = ({ cartItems, history }) => (
    <div className='CartDropdown'>
        <div className='cartItems'>
            {cartItems.length ? (
                cartItems.map(cartItem => <CartItem 
                    key={cartItem.id} 
                    item={cartItem}
                />)
            ) : (
                <span className='emptyMessage'>Your cart is empty</span>
            )}
        </div>
        <Button onClick={() => history.push('/checkout')}>GO TO CHECKOUT</Button>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));