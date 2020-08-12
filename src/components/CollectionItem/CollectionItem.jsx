import React from 'react';
import { connect } from 'react-redux';
import './CollectionItem.scss';

import Button from '../Button/Button';

import { addItemToCart } from '../../redux/cart/cartActions'

const CollectionItem = ({ item, addItem }) => {
  const {name, imageUrl, price} = item;

  return (
    <div className='CollectionItem'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collectionFooter'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button inverted onClick={()=>addItem(item)}>
        Add to Cart 
      </Button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
})

export default connect(
  null, 
  mapDispatchToProps
)(CollectionItem);
