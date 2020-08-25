import React from 'react';
import './Shop.scss';

import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';

const Shop = ({ collections }) => (
    <div className='Shop'>
        <CollectionOverview />
    </div>
);

export default Shop;