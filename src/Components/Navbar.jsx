import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        const notify = () => toast.success("Successfully log out");
        notify();
        console.log("user log out");
      })

      .catch((error) => console.error(error));
  };
  const navLinks = (
    <>
      <ToastContainer />
      <NavLink
        className={({ isActive }) =>
          isActive ? "md:border-b-4 pb-2 border-black font-bold" : "font-bold"
        }
        to="/"
      >
        Home
      </NavLink>
      {user && (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-4 pb-2 border-black  font-bold" : "font-bold"
            }
            to="/profile"
          >
            Profile
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-4 pb-2 border-black  font-bold" : "font-bold"
            }
            to="/saved-property"
          >
            Saved Properties
          </NavLink>
        </>
      )}
      <NavLink
        className={({ isActive }) =>
          isActive ? "md:border-b-4 pb-2 border-black  font-bold" : "font-bold"
        }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "md:border-b-4 pb-2 border-black  font-bold" : "font-bold"
        }
        to="/contact"
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
              {navLinks}
            </ul>
          </div>
          <a className="">
            <img
              src="Images/LandLux-removebg-preview.png"
              className="w-48"
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 flex gap-8">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown dropdown-end z-10">
                <div
                  className="hover:tooltip tooltip-open hover:tooltip-bottom z-10"
                  data-tip={user.displayName}
                >
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img alt="user" src={user.photoURL} />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="space-y-1 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <NavLink to="/profile">Profile</NavLink>
                  <NavLink to="/edit-user">Update Profile</NavLink>
                  <NavLink onClick={handleLogOut} to="/">
                    Logout
                  </NavLink>
                  <NavLink to="/register">Register</NavLink>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn border-sky-500 bg-transparent text-sky-500 btn-xs md:btn-sm mr-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn border-black text-black bg-transparent btn-xs md:btn-sm"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
