import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './Shop.scss'

import selectShopCollections from '../../redux/shop/shopSelectors';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

const Shop = ({ collections }) => (
    <div className='Shop'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview 
                key={id} 
                {...otherCollectionProps}
            />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(Shop);