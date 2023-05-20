import React, { useCallback, useContext } from 'react';
import { authContext } from '../../../providers/AuthProviders';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CategoryToyCard = ({ toy }) => {
    console.log(toy);

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



    return (
        <div className=''>
            <div className="card card-compact md:w-72 w-full border-2 border-gray-300 bg-base-200 shadow-xl h-[500px]">
                <figure className='md:h-[270px]'><img className='h-fit w-full' src={photo} alt="Shoes" /></figure>
                <div className="card-body flex flex-col justify-between">

                    <h2 className="card-title text-[#03BFA7]"> {name.length < 20 ? name : name.slice(0, 20) + '...'}</h2>

                    <span className='-mt-12'>
                        <p className='text-2xl '>Price: <span className='text-[#fa7092] font-semibold'> ${price}</span></p>
                        <p>Rating: {rating}</p>
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