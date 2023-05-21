import React, { useCallback, useContext } from 'react';
import { authContext } from '../../../providers/AuthProviders';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Rating, Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const CategoryToyCard = ({ toy }) => {

    const { name, photo, price, details, quantity, rating, _id } = toy;
    const { user } = useContext(authContext)
    const navigate = useNavigate()

    const handleViewDetails = (id) => {
        if (!user) {
            // navigate('/login')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to log in first to view details!',
            })
        }

        navigate(`/toyDetails/${toy._id}`)
    }

    const myStyles = {
        itemShapes: Star,
        activeFillColor: ['#fa7092', '#fa7092', '#fa7092', '#fa7092', '#fa7092'],
        inactiveFillColor: '#f9c4d1',

    }



    return (
        <div className=''>
            <div className="card card-compact md:w-72 w-full border-2 border-gray-300 bg-base-200 shadow-xl h-[500px]">
                <figure className='md:h-[270px]'><img className='h-fit w-full' src={photo} alt="Shoes" /></figure>
                <div className="card-body flex flex-col justify-between">

                    <h2 className="card-title text-[#03BFA7]"> {name.length < 20 ? name : name.slice(0, 20) + '...'}</h2>

                    <span className='md:-mt-12'>
                        <p className='text-2xl '>Price: <span className='text-[#fa7092] font-semibold'> ${price}</span></p>

                        <div className='flex items-center mt-1'>
                            <Rating style={{ maxWidth: 100 }} value={rating} readOnly itemStyles={myStyles} />
                            <span className='ms-2 mb-0 font-semibold'>({rating})</span>
                        </div>




                    </span>

                    <div className="card-actions justify-end">
                        <button onClick={() => handleViewDetails(_id)} className="custom-primary-btn">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryToyCard;