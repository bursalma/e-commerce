import React from 'react';
import './CartIcon.scss'

import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag.svg';

const CartIcon = () => (
    <div className='CartIcon'>
        <ShoppingIcon className='ShoppingIcon' />
        <span className='itemCount'>0</span>
    </div>
);

export default CartIcon;