import { Link } from "react-router-dom";
import logo from '../../../assets/images/Logos/action-logo.png'
import { FaSearch, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { authContext } from "../../../providers/AuthProviders";
import profile from '../../../assets/images/Logos/profile-user.png'


const Navbar = () => {

    const { user, logOut } = useContext(authContext);
    const [hide, setHide] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }




    const navItems = <>
        <Link to='/'>Home</Link>
        <Link to='/allToys'>All Toys</Link>
        {
            user ? <>
                <Link to='/myToys'>My Toys</Link>
                <Link to="/addToy">Add A Toy</Link>
                <Link to='/blogs'>Blogs</Link>
                <button onClick={handleLogOut}>Log out</button>
            </>
                :
                <>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/login'>Login</Link>
                </>
        }
    </>

    window.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        if (window.pageYOffset > 0) {
            navbar.classList.add('shadow-2xl');
        } else {
            navbar.classList.remove('shadow-2xl');
        }
    });


    return (
        <div>
            <div id="navbar" className="fixed  bg-white top-0 navbar h-18 px-6 md:px-20 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label onClick={() => setHide(false)} tabIndex={0} className="btn pl-0 pr-3 bg-white lg:hidden text-black border-white hover:text-[#03BFA7] hover:bg-white hover:border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#d9fbf6] rounded-box w-44 ${hide ? 'hidden' : 'flex'}`}>

                            <li onClick={() => setHide(true)}>

                                {navItems}
                            </li>

                        </ul>
                    </div>
                    <Link to='/' className="flex items-center">
                        <img src={logo} className="md:w-12 w-8" alt="" /> <span className="md:text-3xl text-2xl md:ml-2 ml-1 font-custom2"><span className="text-[#03BFA7]">Action</span><span className="text-[#fa7092]">Land</span></span>
                    </Link>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold ">

                        <li>
                            {navItems}
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <FaSearch className=" hidden lg:flex ml-4 border-2 border-slate-500 border-dashed p-2 rounded-full w-10 h-10 text-sm"></FaSearch>
                    <FaShoppingBag className="hidden lg:flex ml-4 border-2 border-slate-500 border-dashed p-2 rounded-full w-10 h-10 text-sm"></FaShoppingBag>
                    <div className="hidden lg:flex badge badge-md bg-[#fa7092] relative -top-3 -left-3 border-none text-white">0</div>


                    {
                        <div className="tooltip tooltip-left" data-tip={user?.displayName}>




                            <Link to={user ? `/user` : '/login'}>
                                <div className="relative">
                                    <img className={`h-11 w-11 rounded-full hover:scale-105 p-1 transition-all duration-700 ${user?.photoURL ? 'border-[#03BFA7]' : 'border-slate-500'}`} src={user?.photoURL ? user?.photoURL : profile} alt="" />
                                    {user ? (
                                        <div className="absolute inset-0 rounded-full border-2 border-[#03BFA7] border-dashed animate-spin" style={{ animationDuration: '15s' }}></div>
                                    ) : (
                                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-500"></div>
                                    )}
                                </div>
                            </Link>
                        </div>


                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;