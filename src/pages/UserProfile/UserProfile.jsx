import React, { useContext } from 'react';
import { authContext } from '../../providers/AuthProviders';
import { FaCog, FaQuestion, FaRegSun, FaSms } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {

    const { user, logOut } = useContext(authContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
            navigate('/login')
    }


    return (
        <div>
            <div className='bg-base-200 min-h-screen py-10 md:px-56 mt-16'>
                <div className='bg-white items-center justify-center p-8 rounded-xl flex gap-x-12 md:flex-row flex-col gap-y-8'>

                    <img className='w-96 rounded-3xl' src={user?.photoURL} alt="" />

                    <div className='space-y-3'>
                        <h2 className='text-4xl'>{user?.displayName}</h2>
                        <h2 className='text-xl'>{user?.email}</h2>
                        <h2 className='flex items-center font-semibold'><FaCog></FaCog> <span className='ml-2'>Settings & Privacy</span></h2>
                        <h2 className='flex items-center font-semibold'><FaQuestion></FaQuestion> <span className='ml-2'>Help & Support</span></h2>
                        <h2 className='flex items-center font-semibold'><FaSms></FaSms> <span className='ml-2'>Give feedback</span></h2>


                        <div>
                            <button onClick={handleLogOut} className='bg-[#09917f] btn w-full border-[#09917f]'>Logout</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserProfile;