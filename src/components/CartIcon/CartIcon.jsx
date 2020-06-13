import React from 'react';
import { connect } from 'react-redux';
import './CartIcon.scss'

import { TOGGLE_CART_HIDDEN } from '../../redux/cart/cartActions'
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag.svg';

const CartIcon = () => (
    <div className='CartIcon' onClick={TOGGLE_CART_HIDDEN}>
        <ShoppingIcon className='ShoppingIcon' />
        <span className='itemCount'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    TOGGLE_CART_HIDDEN: () => dispatch(TOGGLE_CART_HIDDEN())
})

export default connect(
    null, 
    mapDispatchToProps
)(CartIcon);