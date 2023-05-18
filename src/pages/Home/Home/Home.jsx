import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import WhyChoose from '../WhyChoose/WhyChoose';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
            <WhyChoose></WhyChoose>
            <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;