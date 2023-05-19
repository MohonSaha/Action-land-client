import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import WhyChoose from '../WhyChoose/WhyChoose';
import Subscribe from '../Subscribe/Subscribe';
import TrendyCollection from '../TrendyCollection/TrendyCollection';
import ToyGallary from '../ToyGallary/ToyGallary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrendyCollection></TrendyCollection>

            <div className='relative text-center -top-[250px]'>
                <h3 className='text-xl text-[#03BFA7] font-semibold'>Best Collection</h3>
                <h1 className='text-5xl font-bold'>Attractive Toys Gallary </h1>
            </div>

            <ToyGallary>{2000}</ToyGallary>
            <ToyGallary>{5000}</ToyGallary>
            <ShopByCategory></ShopByCategory>
            <WhyChoose></WhyChoose>
            <Subscribe></Subscribe>

        </div>
    );
};

export default Home;