import React from 'react';
import './CollectionPreview.scss';

import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({ title, items }) => (
  <div className='CollectionPreview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
