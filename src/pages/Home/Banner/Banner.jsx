import React from 'react';
import img1 from '../../../assets/images/Super-banner/thum-2.jpg'
import img2 from '../../../assets/images/Super-banner/thum-1.jpg'
import img3 from '../../../assets/images/Super-banner/thum-3.jpg'
import { FaBeer, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="carousel md:mx-8 h-[600px] md:h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full md:rounded-3xl" />

                    <div className="absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#000000d4] to-[#00000070] h-full w-full md:rounded-3xl">

                        <div className='text-white w-full text-center absolute top-1/4' data-aos="zoom-in-up">
                            <h3 className='md:text-xl text-lg font-bold mb-6 font-custom2'>Children Toys 2023</h3>
                            <h2 className='text-5xl md:text-6xl font-custom2 font-bold mb-5'>Kids Toys </h2>
                            <h2 className='text-5xl md:text-6xl font-custom2 font-bold mb-10 mt-0'>Up To 20% Off</h2>
                            <div>
                                <button className="custom-primary-btn">
                                    <Link to='/allToys'>Shop Now</Link><FaPlus className='ml-3'></FaPlus> </button>

                            </div>
                        </div>

                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 top-2/3">
                        <a href="#slide4" className="btn btn-circle text-slate-600 bg-[#fff] border-[#fff]">❮</a>
                        <a href="#slide2" className="btn btn-circle text-slate-600 bg-[#fff] border-[#fff]">❯</a>

                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;