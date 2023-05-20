import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { authContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import TitlePage from '../Shared/TitlePage/TitlePage';

const AddAToy = () => {

    const { user } = useContext(authContext)
    const [selected, setSelected] = useState('');

    const handleChange = event => {
        setSelected(event.target.value);
    };

    // const {control, setControl} = useContext(stateContext);


    const handleAddToys = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const price = form.price.value;
        const sName = form.sName.value;
        const sEmail = form.sEmail.value;
        const sub_category = selected;
        const quantity = form.quantity.value;
        const rating = form.rating.value;

        const newToys = { name, photo, details, sub_category, sName, sEmail, price, quantity, rating };

        fetch('https://zoo-land-server.vercel.app/addToys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Successfully added new product.',
                        'success'
                    )

                }
                form.reset()
            })
            .catch(err => console.log(err))

    }



    return (

        <div className=''>
            <TitlePage title="Home | Add A Toy"></TitlePage>

            <div className="bg-base-200 py-10 md:px-64 px-8 min-h-screen mt-16">
                <Link className='mb-8 text-[#03BFA7] flex items-center font-semibold text-xl' to='/allToys'><FaArrowLeft className='mr-3'></FaArrowLeft> All Toys</Link>

                <form onSubmit={handleAddToys}>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
                        <div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Toy Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" placeholder="Enter toy name" name="name" className="input input-bordered w-full rounded-lg border-base-100" />

                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Photo Url</span>
                                </label>
                                <label className="input-group">
                                    <input type="url" placeholder="Enter url" name="photo" className="input input-bordered w-full rounded-lg border-base-100" />

                                </label>
                            </div>


                            <div className="mt-3">
                                <span className="label-text text-xl font-semibold px-1">Category</span>
                                <select onChange={handleChange} className="select w-full mt-2">
                                    <option disabled selected>Select toy category</option>
                                    <option>Marvel</option>
                                    <option>Star-wars</option>
                                    <option>Transformers</option>
                                </select>
                            </div>


                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" placeholder="Enter price" name="price" className="input input-bordered w-full rounded-lg border-base-100" />

                                </label>
                            </div>


                        </div>


                        <div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Seller Name </span>
                                </label>
                                <label className="input-group">
                                    <input defaultValue={user?.displayName} type="text" placeholder="Enter seller name" name="sName" className="input input-bordered w-full rounded-lg border-base-100" />

                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Seller Email</span>
                                </label>
                                <label className="input-group">
                                    <input defaultValue={user?.email} type="text" placeholder="Enter seller email" name="sEmail" className="input input-bordered w-full rounded-lg border-base-100" />

                                </label>
                            </div>


                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" placeholder="Enter rating" name="rating" className="input input-bordered w-full rounded-lg border-base-100" />

                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Available Quantity</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" placeholder="Enter quantity" name="quantity" className="input input-bordered w-full rounded-lg border-base-100" />

                                </label>
                            </div>
                        </div>
                    </div>



                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Details</span>
                        </label>
                        <textarea placeholder='Toy details' className='rounded-lg p-3' id="details" name="details" rows="4" cols="50"> </textarea>
                    </div>


                    <input type="submit" className="btn w-full bg-[#0a9b87] border-[#0a9b87] hover:bg-[#067c6c] hover:border-[#067c6c] text-white mt-10" value="Save" />
                </form>
            </div >
        </div >
    );
};


export default AddAToy;