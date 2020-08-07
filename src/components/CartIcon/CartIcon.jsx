import React from 'react';
import { connect } from 'react-redux';
import './CartIcon.scss'

import { toggleCartHidden } from '../../redux/cart/cartActions'
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag.svg';

const CartIcon = ({ toggleCartHidden }) => (
    <div className='CartIcon' onClick={toggleCartHidden}>
        <ShoppingIcon className='ShoppingIcon' />
        <span className='itemCount'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    null, 
    mapDispatchToProps
)(CartIcon);