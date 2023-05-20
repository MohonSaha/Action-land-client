import React from 'react';
import banner from '../../../assets/images/banars/why-choose-banner.jpg'
import img1 from '../../../assets/images/banars/side-img.jpg'
import img2 from '../../../assets/images/banars/side-img-2.jpg'
import { FaCubes, FaHandHoldingMedical, FaUsers } from 'react-icons/fa';

const WhyChoose = () => {
    return (
        <div className=' mt-24'>
            <div className='relative'>
                <img className='md:h-screen h-screen w-full' src={banner} alt="" />
                <div className='absolute flex flex-col md:flex-row pt-4 md:pt-20 left-0 top-0 bg-gradient-to-r from-[#0e1110ca] to-[#069e8a79] h-full w-full md:px-24 px-4 space-x-8 space-y-10 md:space-y-0'>

                    <div className='mt-6 md:w-1/2'>
                        <h1 className='font-bold md:text-6xl text-5xl text-white'>Why Choose Zoo Land?</h1>
                        <p className=' font-semibold text-slate-300 mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta velit iusto quaerat quibusdam voluptates reprehenderit aspernatur deleniti autem hic.</p>

                        <div className='mt-6 flex'>
                            <FaCubes className='text-white text-4xl'></FaCubes> <h3 className='text-2xl text-white ml-4 font-semibold'>
                                Highly Good Product</h3>
                        </div>
                        <p className='font-semibold text-slate-300 ml-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse illum ex soluta ipsum distinctio saepe?</p>

                        <div className='mt-6 flex'>
                            <FaHandHoldingMedical className='text-white text-4xl'></FaHandHoldingMedical> <h3 className='text-2xl text-white ml-4 font-semibold'>
                            Quality Control System</h3>
                        </div>
                        <p className='font-semibold text-slate-300 ml-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse illum ex soluta ipsum distinctio saepe?</p>


                    </div>

                    <div className=''>
                        <img className='rounded-lg md:w-[400px] w-44' src={img1} alt="" />
                        <img className='rounded-lg relative w-44 md:w-96 md:-top-28 -top-16 md:left-40 left-28' src={img2} alt="" />
                    </div>


                </div>
            </div>


        </div>
    );
};

export default WhyChoose;