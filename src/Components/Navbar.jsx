import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user log out"))
      .catch((error) => console.error(error));
  };
  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-b-4 pb-2 border-cyan-400 text-cyan-400 font-bold"
            : "font-bold"
        }
        to="/"
      >
        Home
      </NavLink>

      {user && (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-4 pb-2 border-cyan-400 text-cyan-400 font-bold"
                : "font-bold"
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-4 pb-2 border-cyan-400 text-cyan-400 font-bold"
                : "font-bold"
            }
            to="/profile"
          >
            Profile
          </NavLink>
        </>
      )}
    </>
  );
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
              {navLinks}
            </ul>
          </div>
          <a>
            <img
              src="Images/LandLux-removebg-preview.png"
              className="w-40"
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
              <div
                className="dropdown dropdown-end hover:tooltip tooltip-open hover:tooltip-bottom"
                data-tip={user.displayName}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <NavLink to="/profile">Profile</NavLink>
                  <NavLink to="/profile">Settings</NavLink>
                  <NavLink onClick={handleLogOut} to="/">
                    Logout
                  </NavLink>
                </ul>
              </div>
            </>
          ) : (
            <Link to="/login" className="btn btn-sm">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
