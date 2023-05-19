import React, { useContext } from 'react';
import { authContext } from '../../providers/AuthProviders';

const UserProfile = () => {

    const { user } = useContext(authContext)


    return (
        <div>
            <div className='bg-base-200 min-h-screen py-10 px-56 '>
                <div className='bg-white p-8 rounded-xl flex gap-x-12'>
                    <img className='w-96 rounded-3xl' src={user?.photoURL} alt="" />
                    <div >
                        <h2 className='text-4xl'>{user?.displayName}</h2>
                        <h2 className='text-xl'>{user?.email}</h2>

                        <div>
                            <button className='bg-[#09917f] btn w-full border-[#09917f]'>Logout</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserProfile;