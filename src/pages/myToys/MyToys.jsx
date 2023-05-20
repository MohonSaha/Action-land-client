import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../providers/AuthProviders';
import ChildRow from './ChildRow';

const MyToys = () => {

    const [myToys, setMyToys] = useState([])
    const { user } = useContext(authContext);

    const url = `http://localhost:5000/myToys?sEmail=${user?.email}&sort=1`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [])


    return (
        <div className='mt-16 md:mx-24'>
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
                            ></ChildRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;