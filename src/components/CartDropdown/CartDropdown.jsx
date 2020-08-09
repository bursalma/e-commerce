import React from 'react';
import { connect } from 'react-redux';
import './CartDropdown.scss';

import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import { selectCartItems } from '../../redux/cart/cartSelectors'

const CartDropdown = ({ cartItems }) => (
    <div className='CartDropdown'>
        <div className='cartItems'>
            {cartItems.map(cartItem => <CartItem 
                key={cartItem.id} 
                item={cartItem}
            />)}
        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);