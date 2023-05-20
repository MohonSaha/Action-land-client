import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../assets/images/Logos/login.jpg'
import { FaGoogle } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { authContext } from '../../../providers/AuthProviders';
import TitlePage from '../../Shared/TitlePage/TitlePage';
import Swal from 'sweetalert2';


const Login = () => {

    const { signIn, user, signInWithGoogle } = useContext(authContext);
    const [error, setError] = useState('');


    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                Swal.fire(
                    'Good job!',
                    'You have successfully logged in!',
                    'success'
                )
            })
            .catch(error => {
                setError(error.message)
            })

    }


    // Handle Google signIn: 
    const handleGoogleSignIn = () => {
        setError('');

        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;

                navigate(from, { replace: true })
                Swal.fire(
                    'Good job!',
                    'You have successfully logged in!',
                    'success'
                )
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <div className="hero min-h-screen">
            <TitlePage title="Home | Log In"></TitlePage>


            <div className="hero-content flex-col lg:flex-row ">
                <div className="text-center lg:text-left w-1/2 mr-32">
                    <img src={img} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-black border-2">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin}>
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

                            <div className="form-control mt-6">
                                <input type="submit" className='btn text-white bg-[#09917f] border-[#09917f]' value="Log In" />
                            </div>
                        </form>

                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSignIn} className='btn bg-white text-[#09917f]'>
                            <FaGoogle className='mr-4'></FaGoogle> Sign In With Google
                        </button>

                        <p className='text-center'>New to Car Doctor? <Link className='text-[#017f7f]' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;