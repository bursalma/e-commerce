import React from 'react';
import { connect } from 'react-redux';
import './CheckoutItem.scss';

import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../redux/cart/cartActions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;

    return (
        <div className='CheckoutItem'>
            <div className='imageContainer'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span> 
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='removeButton' onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItemToCart(item)),
    removeItem: item => dispatch(removeItemFromCart(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);