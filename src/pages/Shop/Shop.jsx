import React from 'react';
import { Route } from 'react-router-dom';
import './Shop.scss';

import Collection from '../Collection/Collection';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';

const Shop = ({ match }) => (
    <div className='Shop'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:categoryId`} component={Collection} />
    </div>
);

export default Shop;