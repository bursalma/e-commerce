import React from 'react';
import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem: {imageUrl, name, quantity, price} }) => (
    <div className='CheckoutItem'>
        <div className='imageContainer'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='removeButton'>&#10005;</div>
    </div>
)

export default CheckoutItem;