import React from 'react';
import demo1 from '../../../assets/images/Super-trendy/demo-1.jpg'
import demo2 from '../../../assets/images/Super-trendy/demo-2.jpg'
import { Link } from 'react-router-dom';

const TrendyCollection = () => {
    return (
        <div className='md:mx-32 mx-6 mt-16' >
            <div className='flex md:flex-row flex-col-reverse gap-y-6 md:gap-x-12' data-aos="flip-left">
                <img className='md:w-5/6 w-full h-[500px]  md:h-[700px] rounded-3xl' src={demo1} alt="" />
                <div className='md:w-4/5 w-full'>
                    <h1 className='text-5xl font-semibold'>Trendy Toys For Your Kids</h1>
                    <p className='mt-6 text-lg font-semibold'>We Are An Online Toys Store With More Than 12-Years Experience On The Market! Our Shop Is Aimed To Fulfill All Parents Need And Give Your Babies A Perfect Childhood!</p>
                    <Link to='/allToys'><button className='custom-primary-btn mt-4'>Show Now</button></Link>
                </div>
            </div>


            <div className='flex flex-col-reverse gap-y-6 md:gap-x-12 md:flex-row-reverse mt-8' data-aos="flip-left">
                <img className='md:w-5/6 md:h-[700px] w-full h-[500px] rounded-3xl relative md:-top-96' src={demo2} alt="" />
                <div className='w-4/5'>
                    <h1 className='text-5xl font-semibold'>New Toys Collection For Kids</h1>
                    <p className='mt-6 text-lg font-semibold'>We Are An Online Toys Store With More Than 12-Years Experience On The Market! Our Shop Is Aimed To Fulfill All Parents Need And Give Your Babies A Perfect Childhood!</p>
                    <Link to='/allToys'><button className='custom-primary-btn mt-4'>Show Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TrendyCollection;