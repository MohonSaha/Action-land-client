import { Link } from "react-router-dom";
import logo from '../../../assets/images/Logos/toy-store.png'
import { FaSearch, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { authContext } from "../../../providers/AuthProviders";


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
            user?.email ? <>
                <li><Link to='/appoinment'>My Toys</Link></li>
                <li><Link to="/addToy">Add A Toy</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>
                <li><button onClick={handleLogOut}>Log out</button></li>
            </>
                :
                <>
                <li><Link to='/appoinment'>Blogs</Link></li>
                <li><Link to='/login'>Login</Link></li>
                </>
        }

        

    </>


    return (
        <div>
            <div className="navbar h-18 mb-4 px-2 md:px-20 z-10 relative">
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
                        <img src={logo} className="md:w-12 w-8" alt="" /> <span className="md:text-3xl text-2xl font-bold font-serif md:ml-4 ml-2"><span className="text-[#03BFA7]">Zoo</span><span className="text-[#FB80AB]">Land</span></span>
                    </Link>
                </div>
                <div className="navbar-center lg:ml-40  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold">

                        {navItems}

                    </ul>
                </div>
                <div className="navbar-end">
                    <FaSearch className="text-2xl"></FaSearch>
                    <FaUserCircle className="ml-4 text-2xl"></FaUserCircle>
                    <FaShoppingBag className="ml-4 text-2xl"></FaShoppingBag>
                </div>
            </div>
        </div>
    );
};

export default Navbar;