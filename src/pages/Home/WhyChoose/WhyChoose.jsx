import React from 'react';
import banner from '../../../assets/images/Super-banner/why-choose.jpg'
import img1 from '../../../assets/images/Super-banner/w-1.jpg'
import img2 from '../../../assets/images/Super-banner/w-2.jpg'
import { FaCubes, FaHandHoldingMedical, FaUsers } from 'react-icons/fa';

const WhyChoose = () => {
    return (
        <div className=' mt-24'>
            <div className='relative'>
                <img className='md:h-screen h-[900px] w-full' src={banner} alt="" />
                <div className='absolute flex flex-col md:flex-row md:pt-20 left-0 top-0 bg-gradient-to-r from-[#0e1110ca] to-[#069e8a79] h-full w-full md:px-24 px-4 md:space-x-8 space-y-5 md:space-y-0'>

                    <div className='mt-6 md:w-1/2'>
                        <h1 className='font-bold md:text-6xl text-3xl text-white font-custom2 leading-tight'>Why Choose Action Land?</h1>
                        <p className=' md:font-semibold text-slate-300 mt-4'>Welcome to our extraordinary world of superhero toys! At Action Land, we understand the joy and excitement that comes with unleashing your inner hero through play.</p>

                        <div className='mt-6 flex'>
                            <FaCubes className='text-white text-4xl'></FaCubes> <h3 className='text-2xl text-white ml-4 font-semibold'>
                                Highly Good Product</h3>
                        </div>
                        <p className='font-semibold text-slate-300 ml-14'>Introducing our sensational action hero toy products! Designed to ignite imagination and inspire thrilling adventures, these toys bring out the hero in every child.</p>

                        <div className='mt-6 flex'>
                            <FaHandHoldingMedical className='text-white text-4xl'></FaHandHoldingMedical> <h3 className='text-2xl text-white ml-4 font-semibold'>
                                Quality Control System</h3>
                        </div>
                        <p className='font-semibold text-slate-300 ml-14'>
                            At Action Land, we prioritize quality control. Our stringent system ensures that every toy undergoes rigorous testing, guaranteeing superior craftsmanship, safety, and durability.</p>


                    </div>

                    <div className=''>
                        <img className='rounded-lg md:w-[400px] w-4/6' src={img1} alt="" />
                        <img className='rounded-lg relative w-4/6 md:w-96 md:-top-28 -top-12 md:left-40 left-20 ' src={img2} alt="" />
                    </div>


                </div>
            </div>


        </div>
    );
};

export default WhyChoose;