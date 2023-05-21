import React from 'react';
import errorLogo from '../../assets/images/banars/error-2.gif'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <button className='btn relative top-20 left-16 custom-primary-btn'><Link to="/">Back To Home</Link></button>
            <div className='min-h-screen flex items-center justify-center'>
                <img src={errorLogo} alt="" />
            </div>
        </div>
    );
};

export default Error;