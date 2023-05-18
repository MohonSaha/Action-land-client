import React from 'react';
import img1 from '../../../assets/images/banars/b-1.jpg'
import img2 from '../../../assets/images/banars/b-2.jpg'
import img3 from '../../../assets/images/banars/b-3.jpg'
import { FaBeer, FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            <div className="carousel md:mx-8 h-[500px] md:h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-3xl" />

                    <div className="absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#00000092] to-[#0000004a] h-full w-full rounded-3xl">

                        <div className='text-white w-full text-center'>
                            <h3 className='md:text-xl font-bold mb-6'>Markets & Resource</h3>
                            <h2 className='text-2xl md:text-7xl  font-bold mb-28'>Find The Best <br />Doctor Near By You.</h2>
                            <div>
                                <button className="text-white btn bg-[#03BFA7] border-[#03BFA7] mr-5 rounded-3xl">Shop Now<FaPlus className='ml-3'></FaPlus> </button>
                                <button className="btn text-white btn-outline border-[#FFFFFF] rounded-3xl">READ MORE <FaPlus className='ml-3'></FaPlus></button>

                            </div>
                        </div>

                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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
        </div>
    );
};

export default Banner;