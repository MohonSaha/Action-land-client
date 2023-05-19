import React, { useCallback, useContext } from 'react';
import { authContext } from '../../../providers/AuthProviders';
import { useNavigate } from 'react-router-dom';

const CategoryToyCard = ({ toy }) => {
    console.log(toy);

    const {name, photo, price, details, quantity, rating, _id} = toy;
    const {user} = useContext(authContext)
    const navigate = useNavigate()

    const handleViewDetails = (id) =>{
        if(!user){
            navigate('/login')
        }
    }



    return (
        <div>
            <div className="card card-compact w-72 border-2 border-gray-300 bg-base-200 shadow-xl h-[500px]">
                <figure className='h-[270px]'><img className='h-fit w-full' src={photo} alt="Shoes" /></figure>
                <div className="card-body flex flex-col justify-between">

                    <h2 className="card-title text-[#03BFA7]"> {name.length < 20 ? name : name.slice(0, 20) + '...'}</h2>

                    <span className='-mt-12'>
                        <p className='text-2xl '>Price: <span className='text-[#fa7092] font-semibold'> ${price}</span></p>
                        <p>Rating: {rating}</p>
                    </span>

                    <div onClick={()=> handleViewDetails(_id)} className="card-actions justify-end">
                        <button className="custom-primary-btn">View Details </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryToyCard;