import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    const links = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-700 underline" : ""
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-700 underline" : ""
            }
        >
            login
        </NavLink>
        <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-700 underline" : ""
            }
        >
            Register
        </NavLink>
        {
            user && <>
                <NavLink
                    to="/orders"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-green-700 underline" : ""
                    }
                >
                    Orders
                </NavLink>

            </>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Moha Milon</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5 font-bold text-xl">
                    {links}

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span>{user.email}</span>
                        <a onClick={handleLogOut} className="btn">Log Out</a>
                    </> : <Link to="/login"><button className="btn">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;