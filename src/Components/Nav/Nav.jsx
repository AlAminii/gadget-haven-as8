import { NavLink } from "react-router-dom"
import { CiShoppingCart } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";


const Nav = () => {
  const links = [
    <li key="home"><NavLink to="/">Home</NavLink></li>,
    <li key="statistics"><NavLink to="/statistics">Statistics</NavLink></li>,
    <li key="dashboard"><NavLink to="/dashboard">Dashboard</NavLink></li>,
    <li key="faq"><NavLink to="/faq">FAQ</NavLink></li>,
];
        

    return (
     <div className="w-11/12 mx-auto">
         <div className="navbar  bg-[#9538E2] fixed top-0  left-0 right-0 z-50  text-white rounded-t-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
       <div className="flex justify-between gap-10">
       <CiShoppingCart className="text-4xl" />
       <IoMdHeartEmpty className="text-4xl" />

       </div>

        </div>
      </div>
     </div>
    );
};

export default Nav;