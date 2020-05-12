import React from 'react';
import './CartDropdown.scss';

import Button from '../Button/Button'

const CartDropdown = () => (
    <div className='CartDropdown'>
        <div className='cartItems'></div>
        <Button>GO TO CHECKOUT</Button>
    </div>
);

export default CartDropdown;