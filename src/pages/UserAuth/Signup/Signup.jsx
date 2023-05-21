import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/Logos/login.jpg'
import { useContext, useState } from 'react';
import { authContext } from '../../../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';
import TitlePage from '../../Shared/TitlePage/TitlePage';

const SignUp = () => {

    const { createUser, logOut, user } = useContext(authContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignin = event => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);


        // PassWord validation System 
        if (!email) {
            setError('Please add your email address')
            return;
        }
        else if (!password) {
            setError('Please add your password');
            return;
        }
        else if (password.length < 6) {
            setError("Please add at least 6 charecters");
            return;
        }


        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserData(result.user, name, photo)
                console.log(user);
                form.reset();
                logOut()
                    .then()
                    .catch(error => console.log(error))
                navigate('/login')
            })
            .catch(error => {
                setError(error);
            })


            const updateUserData = (user, name, photo) =>{
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo,
                })
                .then()
                .catch(error => console.log(error))
            }
    }


    return (
        <div className="hero min-h-screen mt-20">
            <TitlePage title="Home | Sign Up"></TitlePage>


            <div className="hero-content flex-col lg:flex-row ">
                <div className="text-center lg:text-left w-1/2 mr-32">
                    <img src={logo} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-black border-2">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">SignUp</h1>
                        <form onSubmit={handleSignin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="url" name='photo' placeholder="photo url" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <p className="text-red-500 text-center mt-4 font-semibold">
                                {error}
                            </p>

                            <div className="form-control mt-3">

                                <input type="submit" className='btn text-white bg-[#017f7f] border-[#017f7f]' value="Sign Up" />
                            </div>
                        </form>

                        <p className='text-center'>Already have an account?<Link className='text-[#017f7f]' to='/login'> log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;