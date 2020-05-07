import React from 'react';
import './Button.scss'

const Button = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button 
        className={`${isGoogleSignIn ? 'GoogleSignIn' : ''} Button`} 
        {...otherProps}
    >
        {children}
    </button>
);

export default Button;