import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hbu8XA6Jnae7Q8FIz5ShWMY44P9QCyZqe4itzXkHzxPH9J43DpONu8gDuGLNZKM9L2Pk5KFF2UKotFsnzUeVk2b00vFaGR8uh'
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='E-Commerce'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButton;
