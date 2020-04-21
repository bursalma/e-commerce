import React from 'react';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} MenuItem`}>
        <div 
            className='BackgroundImage' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className='Content'>
            <h1 className='Title'>
                {title.toUpperCase()}
            </h1>
            <span className='Subtitle'>
                SHOP NOW
            </span>
        </div>
    </div>
);

export default MenuItem;