import React from 'react';
import error from '../../assets/Logo/404p.png';


const ErrorPage = () => {
    return (
        <div  style={{width: '100%', height: '100vh', marginTop:'50px'}}>
            <div  className='text-center m-auto'>
            <h1>404</h1>
            <p>Content not found.</p>
            <img src={error}></img>
            </div>
        </div>
    );
};

export default ErrorPage;