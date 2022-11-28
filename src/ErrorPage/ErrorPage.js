import React from 'react';
import error from '../assets/error.jpg';


const ErrorPage = () => {
    return (
        <div  style={{width: '100%', height: '100vh', marginTop:'50px'}}>
            <div  className='text-center m-auto'>
            <h1 className='text-4xl font-bold mb-4'>404</h1>
            <p>Content not found.</p>
            <img className='m-auto' src={error} alt=''></img>
            </div>
        </div>
    );
};

export default ErrorPage;