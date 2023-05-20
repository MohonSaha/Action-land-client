import React from 'react';

const ToyImage = ({hero}) => {
   
    
    console.log(hero);
    return (
        <div>
            <div>
                <img className='border-4 md:w-full w-52 rounded-3xl border-slate-200' src={hero.photo} alt="" />
            </div>
        </div>
    );
};

export default ToyImage;