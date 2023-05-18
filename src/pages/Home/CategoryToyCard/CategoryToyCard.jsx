import React from 'react';

const CategoryToyCard = ({ toy }) => {
    console.log(toy);

    const {name, photo, price, details, quantity, rating} = toy;


    return (
        <div>
            <div className="card card-compact w-96 border-4 border-gray-300 bg-base-200 shadow-2xl">
                <figure><img className='h-72 w-full' src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[#03BFA7]">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryToyCard;