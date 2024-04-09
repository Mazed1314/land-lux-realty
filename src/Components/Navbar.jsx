import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Sign In </a>
              </li>
              <li>
                <a>Sign Up</a>
              </li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-700  rounded-lg font-bold"
                    : "font-bold"
                }
                to="/"
              >
                Home
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img
              src="/Images/book-vibe.png"
              className="w-[60px] h-auto"
              alt=""
            />
            LandLux Realty
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 md:flex gap-8">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 border-b-2 border-green-600 px-2 pb-2 font-bold"
                  : "font-bold"
              }
              to="/"
            >
              Home
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn hidden md:block md:btn-sm mr-3   p-2">Login</a>
          <a className="btn hidden md:block md:btn-sm mr-3   p-2">Sign Up</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
