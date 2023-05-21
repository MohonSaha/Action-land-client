import { Link } from "react-router-dom";
import logo from '../../../assets/images/Logos/toy-store.png'
import { FaSearch, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { authContext } from "../../../providers/AuthProviders";
import profile from '../../../assets/images/Logos/profile-user.png'


const Navbar = () => {

    const { user, logOut } = useContext(authContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        {
            user ? <>
                <li><Link to='/myToys'>My Toys</Link></li>
                <li><Link to="/addToy">Add A Toy</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>
                <li><button onClick={handleLogOut}>Log out</button></li>
            </>
                :
                <>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/login'>Login</Link></li>
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
            <div id="navbar" className="fixed  bg-white top-0 navbar h-18 px-5 md:px-20 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32">

                            {navItems}

                        </ul>
                    </div>
                    <Link to='/' className="flex items-center">
                        <img src={logo} className="md:w-12 w-8" alt="" /> <span className="md:text-3xl text-xl font-bold font-serif md:ml-4 ml-2"><span className="text-[#03BFA7]">Zoo</span><span className="text-[#fa7092]">Land</span></span>
                    </Link>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold">

                        {navItems}

                    </ul>
                </div>
                <div className="navbar-end">
                    <FaSearch className=" hidden lg:flex ml-4 border-2 border-slate-500 border-dashed p-2 rounded-full w-10 h-10 text-sm"></FaSearch>
                    <FaShoppingBag className="hidden lg:flex ml-4 border-2 border-slate-500 border-dashed p-2 rounded-full w-10 h-10 text-sm"></FaShoppingBag>
                    <div className="hidden lg:flex badge badge-md bg-[#fa7092] relative -top-3 -left-3 border-none text-white">0</div>


                    {
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <Link to={user ? `/user` : '/login'}>
                                <img className="h-11 w-11 rounded-full hover:scale-105 border-2 border-slate-500 border-dashed p-1 transition-all duration-700" src={user?.photoURL ? user?.photoURL : profile} alt="" />
                            </Link>
                        </div>


                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;