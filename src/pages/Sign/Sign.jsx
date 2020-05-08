import React from 'react';
import './Sign.scss'

import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

const Sign = () => (
    <div className='Sign'>
        <SignIn />
        <SignUp />
    </div>
);

export default Sign;