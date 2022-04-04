import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='error-page'>
            <img src="error-page.png" alt="" />
            <h2>Sorry, This Page is Not Available !</h2>
        </div>
    );
};

export default NotFound;