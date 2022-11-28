import React from 'react';
import AdvertiseProduct from '../../AdvertiseProduct/AdvertiseProduct';
import ClientRev from '../../ClientRev/ClientRev';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <AdvertiseProduct></AdvertiseProduct>
            <ClientRev></ClientRev>
        </div>
    );
};

export default Home;