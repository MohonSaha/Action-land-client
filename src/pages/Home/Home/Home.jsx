import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import WhyChoose from '../WhyChoose/WhyChoose';
import Subscribe from '../Subscribe/Subscribe';
import TrendyCollection from '../TrendyCollection/TrendyCollection';
import ToyCategoryTabs from '../ToyCategory/ToyCategoryTabs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrendyCollection></TrendyCollection>
            {/* <ToyCategoryTabs></ToyCategoryTabs> */}
            <ShopByCategory></ShopByCategory>
            <WhyChoose></WhyChoose>
            <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;