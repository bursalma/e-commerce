import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './CollectionOverview.scss';

import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionOverview = ({ collections }) => (
    <div className='CollectionOverview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview)