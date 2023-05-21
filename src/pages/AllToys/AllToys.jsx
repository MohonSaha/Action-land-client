import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../providers/AuthProviders';
import { Link, json, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import TitlePage from '../Shared/TitlePage/TitlePage';

const AllToys = () => {

    const { user } = useContext(authContext)
    const navigate = useNavigate()
    const [toys, setToys] = useState([])
    const [searchText, setSearchText] = useState("");

    const handleViewDetails = (id) => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to log in first to view details!',
            })
        }
        navigate(`/toyDetails/${id}`)
    }


    
    useEffect(() => {
        fetch('https://zoo-land-server.vercel.app/showToys')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])


    const handleSearch = () => {
        fetch(`https://zoo-land-server.vercel.app/jobSearchByName/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }


    return (
        <div className='mt-28 md:mx-24'>
            <TitlePage title="Home | All Toys"></TitlePage>


            <div className='text-center mb-6'>
                <h3 className='text-xl text-[#03BFA7] font-semibold'>All Toys</h3>
                <h1 className='text-5xl font-bold'>Total Posted Toys</h1>
            </div>


            <div className="form-control mb-8 w-full  ">
                <label className="input-group flex justify-center">
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search toys by name" className="input input-bordered w-2/3 font-semibold" />
                    <span onClick={handleSearch} className='custom-primary-btn'>Search</span>
                </label>
            </div>


            <div className="overflow-x-auto ">

                <table className="table w-full my-table">
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
                                    <th>
                                        <div className="flex items-center space-x-2">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-24 h-24">
                                                    <img src={toy.photo} alt="Avatar Tailwind CSS Component" className='border- border-base-300 rounded-full' />
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td>

                                        <div>
                                            <div className="font-bold">{toy.name}</div>
                                            <div className="text-sm opacity-80">Sub Category: {toy.sub_category}</div>
                                            <div className="text-sm opacity-80">Quantity: {toy.quantity}</div>
                                        </div>
                                    </td>
                                    <td className='text-lg font-semibold'>${toy.price}</td>
                                    <td>{toy.sName ? toy.sName : <span className='text-slate-500'>Not Found</span>}</td>
                                    <td>
                                        <button onClick={() => handleViewDetails(toy._id)} className="btn bg-white border-white hover:bg-[#03BFA7] hover:text-white hover:border-[#03BFA7] transition-all duration-500 btn-sm text-[#03BFA7] ">View Details</button>
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