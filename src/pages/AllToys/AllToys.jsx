import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';

const AllToys = () => {


    const { user } = useContext(authContext)
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])



    return (
        <div>
            <div className="overflow-x-auto mt-20 md:mx-24">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Toys</th>
                            <th>Price</th>
                            <th>Seller</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {/* row 1 */}

                    {
                        toys.map(toy =>
                            <tbody key={toy._id}>
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-2">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img src={toy.photo} alt="Avatar Tailwind CSS Component" className='border- border-base-300 rounded-full' />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>

                                        <div>
                                            <div className="font-bold">{toy.name}</div>
                                            <div className="text-sm opacity-80">Sub Category: {toy.sub_category}</div>
                                            <div className="text-sm opacity-80">Quantity: {toy.quantity}</div>
                                        </div>
                                    </td>
                                    <td>${toy.price}</td>
                                    <td>{user?.displayName}</td>
                                    <td>
                                        <button className="btn btn-ghost btn-sm"><Link to={`/toyDetails/${toy._id}`}>View Details</Link></button>
                                    </td>
                                </tr>
                            </tbody>

                        )
                    }






                </table>
            </div>
        </div>
    );
};

export default AllToys;