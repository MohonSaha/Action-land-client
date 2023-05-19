import React from 'react';
import demo1 from '../../../assets/images/Super-trendy/demo-1.jpg'
import demo2 from '../../../assets/images/Super-trendy/demo-2.jpg'

const TrendyCollection = () => {
    return (
        <div className='mx-32 mt-16'>
            <div className='flex md:gap-x-12'>
                <img className='w-5/6 h-[700px] rounded-3xl' src={demo1} alt="" />
                <div className='w-4/5'>
                    <h1 className='text-5xl font-semibold'>Trendy Toys For Your Kids</h1>
                    <p className='mt-6 text-lg font-semibold'>We Are An Online Toys Store With More Than 12-Years Experience On The Market! Our Shop Is Aimed To Fulfill All Parents Need And Give Your Babies A Perfect Childhood!</p>
                    <button className='custom-primary-btn mt-4'>Show Now</button>
                </div>
            </div>


            <div className='flex md:gap-x-12 flex-row-reverse mt-8'>
                <img className='w-5/6 h-[700px] rounded-3xl relative -top-96' src={demo2} alt="" />
                <div className='w-4/5'>
                    <h1 className='text-5xl font-semibold'>New Toys Collection For Kids</h1>
                    <p className='mt-6 text-lg font-semibold'>We Are An Online Toys Store With More Than 12-Years Experience On The Market! Our Shop Is Aimed To Fulfill All Parents Need And Give Your Babies A Perfect Childhood!</p>
                    <button className='custom-primary-btn mt-4'>Show Now</button>
                </div>
            </div>
        </div>
    );
};

export default TrendyCollection;