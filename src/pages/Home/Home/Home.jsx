import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import WhyChoose from '../WhyChoose/WhyChoose';
import Subscribe from '../Subscribe/Subscribe';
import TrendyCollection from '../TrendyCollection/TrendyCollection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrendyCollection></TrendyCollection>
            {/* <ShopByCategory></ShopByCategory> */}
            <WhyChoose></WhyChoose>
            <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;