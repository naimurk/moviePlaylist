import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    console.log(user);
    return (
        <div className="navbar px-3 lg:px-12 py-3 lg:py-5 bg-[#7F5283]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost bg-[#FEFBF6] lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="  h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            {
                                user ? <Link to={"/playlist-Creation"}><button className="btn bg-[#7F5283] hover:text-black text-[#FEFBF6]">Create A Playlist</button></Link> : ""
                            }
                        </li>
                    </ul>
                </div>
                <a href="#" className="btn text-[#FEFBF6] btn-ghost normal-case text-xl">AT Movie</a>
            </div>

            {/* <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      
      <li><a>Item 3</a></li>
    </ul>
  </div> */}
            <div className="navbar-end">
                <div className="mx-3 hidden lg:inline">
                    {
                        user ? <Link to={"/playlist-Creation"}><button className="btn border bg-[#7F5283] text-[#FEFBF6] border-white">Create Playlist</button></Link> : ""
                    }
                </div>

                <div>
                    {
                        user ? <button onClick={() => logOut()} className="btn border text-[#FEFBF6] bg-[#7F5283] border-white">Logout</button> : <Link to={"/login"}><button className="btn border text-[#FEFBF6] bg-[#7F5283] border-white">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;