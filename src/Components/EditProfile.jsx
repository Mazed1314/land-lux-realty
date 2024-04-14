import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const EditProfile = () => {
  const [show, setShow] = useState("false");
  return (
    <div>
      <div className="hero md:min-h-screen bg-gray-50 rounded-t-md">
        <Helmet>
          <title>LandLuxe | Edit user</title>
        </Helmet>
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-bold">
              Update Your profile
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body pb-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Link</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo link"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "password" : "text"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute top-12 right-2"
                >
                  {show ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-sky-400 text-white">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
