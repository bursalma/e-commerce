import React from 'react';
import { connect } from 'react-redux';
import './CartIcon.scss'

import { toggleCartHidden } from '../../redux/cart/cartActions'
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='CartIcon' onClick={toggleCartHidden}>
        <ShoppingIcon className='ShoppingIcon' />
        <span className='itemCount'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({ cart: {cartItems} }) => ({
    itemCount: cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 
        0
    )
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartIcon);