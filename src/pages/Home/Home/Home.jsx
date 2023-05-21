import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import WhyChoose from '../WhyChoose/WhyChoose';
import Subscribe from '../Subscribe/Subscribe';
import TrendyCollection from '../TrendyCollection/TrendyCollection';
import ToyGallary from '../ToyGallary/ToyGallary';
import TitlePage from '../../Shared/TitlePage/TitlePage';

const Home = () => {
    return (
        <div className='md:mt-24 mt-16'>

            <TitlePage title="Home"></TitlePage>
            <Banner></Banner>
            <TrendyCollection></TrendyCollection>

            <div className='relative text-center top-16 md:-top-[250px]'>
                <h3 className='text-xl text-[#03BFA7] font-semibold font-custom2 leading-tight'>Best Collection</h3>
                <h1 className='md:text-5xl text-3xl font-bold font-custom2 leading-tight'>Attractive Toys Gallary </h1>
            </div>


            <div className='mt-24 md-mt-0'  data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="500">

                <ToyGallary>{3000}</ToyGallary>
                <ToyGallary>{6000}</ToyGallary>
            </div>
            <ShopByCategory></ShopByCategory>
            <WhyChoose></WhyChoose>
            <Subscribe></Subscribe>

        </div>
    );
};

export default Home;