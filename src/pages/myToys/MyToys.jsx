import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../providers/AuthProviders';
import ChildRow from './ChildRow';
import Swal from 'sweetalert2';

const MyToys = () => {

    const [myToys, setMyToys] = useState([])
    const { user } = useContext(authContext);
    const [sort, setSort] = useState(-1);



    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )

                    fetch(`http://localhost:5000/myToys/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                const restToys = myToys.filter(toy => toy._id !== id)
                                setMyToys(restToys)
                            }
                        })
                }
            })
    }



    const url = `http://localhost:5000/myToys?sEmail=${user?.email}&sort=${sort}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [sort])



    

  



    return (
        <div className='mt-16 md:mx-24'>

            <div className='mb-12 flex justify-between'>
                <h2>Total Listed Product: </h2>
                <div className="dropdown dropdown-left">
                    <label tabIndex={0} className="btn m-1">Click</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => setSort(1)}><a>Accending</a></li>
                        <li onClick={() => setSort(-1)}><a>Descending</a></li>
                    </ul>
                </div>
            </div>



            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    {/* <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead> */}
                    <tbody className='border-4 rounded-3xl border-slate-300'>
                        {/* row 1 */}

                        {
                            myToys.map(toy => <ChildRow
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                            ></ChildRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;