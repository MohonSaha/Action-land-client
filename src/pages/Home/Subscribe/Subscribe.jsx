import React from 'react';
import image from '../../../assets/images/Super-banner/w-3.jpg'

const Subscribe = () => {
    return (
        <div className='md:mx-6'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row md:gap-16">
                    <img src={image} className="w-5/6 md:max-w-lg rounded-lg shadow-2xl" />
                    <div className='md:w-1/2 w-full'>
                        <h1 className="md:text-5xl text-3xl font-bold">Subscribe Out Email For Newslater</h1>
                        <p className="py-6">Never miss out on the latest updates, exclusive offers, and exciting news from our website. By subscribing to our newsletter, you'll receive regular email updates delivered right to your inbox, keeping you in the loop with everything happening on our site.</p>
                        <div className="form-control">
                            <label className="input-group">
                                
                                <input type="text" placeholder="info@site.com" className="input w-1/2 input-bordered" />
                                <span className='text-white bg-[#09c3d0] border-[#09c3d0]'>Email</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;