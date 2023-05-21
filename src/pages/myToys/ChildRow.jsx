import React from 'react';
import { Link } from 'react-router-dom';

const ChildRow = ({ toy, handleDelete, handleUpdateToys }) => {


    const { name, photo, sub_category, quantity, price, _id } = toy;

    return (
        <tr className='border-2 border-base-300'>
            <td>
                <button onClick={()=> handleDelete(_id)} className="btn btn-circle bg-[#03BFA7] border-[#03BFA7] hover:bg-[#fa7092] hover:border-[#fa7092]  text-white">
                    X
                </button>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img className='' src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{toy.name}</div>
                    <div className="text-sm opacity-80">Sub-Category:{sub_category}</div>
                    <div className="text-sm opacity-80">Quantity: {quantity}</div>
                </div>
            </td>
            <td>
                <p className='text-lg font-semibold'>${price}</p>
            </td>
            <th>
                <button onClick={()=> handleUpdateToys(_id)} className="btn btn-sm bg-[#03BFA7] border-[#03BFA7] hover:bg-[#fa7092] hover:border-[#fa7092]  text-white"><Link to={`/myToys/update/${_id}`}>Update</Link></button>
            </th>
        </tr>
    );
};

export default ChildRow;