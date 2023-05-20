import React, { useContext, useEffect, useState } from 'react';
import { FaCcPaypal, FaCcVisa, FaHeart, FaMoneyBillAlt, FaRegClock, FaShare, FaShareAlt, FaShareSquare } from 'react-icons/fa';
import { useParams, useSearchParams } from 'react-router-dom';
import { authContext } from '../../providers/AuthProviders';
import TitlePage from '../Shared/TitlePage/TitlePage';

const SingleToyDetails = () => {

    const { id } = useParams()
    const [toyDetails, setToyDetails] = useState({})
    const { user } = useContext(authContext);


    useEffect(() => {
        fetch(`http://localhost:5000/toyDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setToyDetails(data);
            })
    }, [])

    const { name, photo, rating, price, quantity, details, sName } = toyDetails;

    return (
        <div className='bg-base-300 min-h-screen -mb-20 py-10'>

            <TitlePage title="Home | Toy Details"></TitlePage>

            <div className='grid md:grid-cols-3 bg-white md:mx-12 p-10 rounded-md h-fit gap-x-6'>
                <div>
                    <img src={photo} alt="" />
                </div>
                <div className='flex justify-around flex-col'>
                    <div>
                        <h1 className='text-4xl font-semibold text-[#029a86]'>{name}</h1>
                        <div className='flex items-center mt-2 w-full'>
                            <h2 className='flex-grow text-lg font-semibold'>Rating: {rating}</h2>
                            <div className='flex  ml-12 flex-grow'>
                                <FaShareAlt className='text-2xl'></FaShareAlt>
                                <FaHeart className='ml-3 text-2xl'></FaHeart>
                            </div>
                        </div>
                        <p className='text-xl font-semibold mt-2'>Available Quantity: {quantity}</p>
                    </div>

                    <h1 className='my-16 text-4xl font-semibold text-[#fa7092]'>${price}</h1>

                    <div>
                        <button className='btn btn-outline rounded-lg bg-[#fa7092] border-[#fa7092] hover:bg-[#bc3a5b] hover:border-[#bc3a5b] transition-all duration-500 px-10'>Buy Now</button>
                        <button className='btn btn-outline rounded-lg bg-[#03BFA7] border-[#03BFA7] hover:bg-[#089885] hover:border-[#03BFA7] transition-all duration-500  ml-6 px-8'>Add to Cart</button>
                    </div>
                </div>


                <div>
                    <div className='mt-5'>
                        <h3 className='text-md font-semibold text-slate-500'>Sold by:</h3>
                        <h2 className=''>Name: {sName ? sName : <span className='text-slate-500'>Not Found</span>} 
                        </h2>
                    </div>

                    <hr className='border-1 my-3 border-slate-400' />
                    <div>
                        <h3 className='text-md font-semibold text-slate-500'>Payment Method:</h3>
                        <h2 className='flex items-center'><FaMoneyBillAlt></FaMoneyBillAlt> <span className='ml-3'>Cash on Delivery Available</span> </h2>
                        <h2 className='flex items-center'><FaCcVisa></FaCcVisa> <span className='ml-3'>Visa Card</span></h2>
                        <h2 className='flex items-center'><FaCcPaypal></FaCcPaypal> <span className='ml-3'>Paypal</span></h2>
                    </div>
                    <hr className='border-1 my-3 border-slate-400' />

                    <div>
                        <h3 className='text-md font-semibold text-slate-500'>Service:</h3>
                        <h2 className='flex items-center'><FaRegClock></FaRegClock> <span className='ml-3'>7 Days Returns</span> </h2>
                        <p><small>Change of mind is applicable</small></p>
                    </div>
                </div>
            </div>



            {/* toys details section  */}
            <div className='my-6 bg-white md:mx-12 p-10 rounded-md h-fit gap-x-6'>
                <h2 className='text-2xl font-semibold text-slate-500'><u>Products Details:</u> </h2>
                <p className='text-lg font-serif mt-2'>{details}</p>
            </div>
        </div>


    );
};

export default SingleToyDetails;