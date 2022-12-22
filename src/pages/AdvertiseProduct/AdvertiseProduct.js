import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Advertise from '../Advertise/Advertise';

const AdvertiseProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        axios.get("https://recycle-freeze-server-himel-shimul.vercel.app/advertise").then((data) => {
        setProducts(data.data);
      console.log(data.data);
    });
    }, [])

    return (
        <div  className='mx-auto my-16'>
            <h2 className="text-4xl my-12 text-center">Advertise</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-4'>
            {
                products?.map(product => <Advertise product={product}></Advertise>)
            }
            </div>
        </div>
    );
};

export default AdvertiseProduct;