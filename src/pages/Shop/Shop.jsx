import React from 'react';
import './Shop.scss'

import SHOP_DATA from './shopData'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='Shop'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview 
                        key={id} 
                        {...otherCollectionProps}
                    />
                ))}
            </div>
        );
    }
}

export default Shop;