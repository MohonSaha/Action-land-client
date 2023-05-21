import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToys = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [toys, setToys] = useState({})
    useEffect(() => {
        fetch(`https://zoo-land-server.vercel.app/update/${id}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])


    const handleUpdateToys = event => {
        event.preventDefault();
        const form = event.target;
        const details = form.details.value;
        const price = form.price.value;
        const quantity = form.quantity.value;

        const updatedToys = {details,price, quantity};

        fetch(`https://zoo-land-server.vercel.app/updateToys/${id}`,{
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(updatedToys)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire(
                    'Updated Successfully',
                    'You have updated data successfully',
                    'success'
                  )
                  navigate('/myToys')
            }
        })



    }

    return (
        <div>
            <div className="bg-base-200 mt-20 py-16 md:px-64 px-8 min-h-screen">
                <Link className='flex items-center font-semibold text-xl' to='/allToys'><FaArrowLeft className='mr-3'></FaArrowLeft> All Toys</Link>

                <form onSubmit={handleUpdateToys}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Price</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={toys?.price} type="text" placeholder="Enter price" name="price" className="input input-bordered w-full rounded-lg border-base-100" />

                        </label>
                    </div>


                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={toys?.quantity} type="text" placeholder="Enter quantity" name="quantity" className="input input-bordered w-full rounded-lg border-base-100" />

                        </label>
                    </div>



                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Details</span>
                        </label>
                        <textarea value={toys?.details} placeholder='Toy details' className='rounded-lg p-3' id="details" name="details" rows="4" cols="50"> </textarea>
                    </div>


                    <input type="submit" className="btn w-full bg-[#0a9b87] border-[#0a9b87] hover:bg-[#067c6c] hover:border-[#067c6c] text-white mt-10" value="Update" />
                </form>
            </div >
        </div>
    );
};

export default UpdateToys;