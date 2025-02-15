import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [show, setShow] = useState("false");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 Characters");
      return;
    }
    if (!/^(?=.*[A-Z]).+$/.test(password)) {
      setRegisterError(
        "Password should be contain at least one uppercase letter"
      );
      return;
    }
    if (!/^(?=.*[a-z]).+$/.test(password)) {
      setRegisterError(
        "Password should be contain at least one Lowercase letter"
      );
      return;
    }

    setRegisterError("");

    // console.log(name, email, password, photoURL);
    createUser(email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name,
          photoURL: photoURL,
        });
        console.log(userCredential.user);
        e.target.reset();
        const notifySuccess = () =>
          toast.success("Successfully register a user");
        notifySuccess();
      })
      .catch((error) => {
        console.error(error);
        // setRegisterError(error.message);
        const test = error.message;
        const notify = () => toast.warning(test);
        notify();
      });
  };

  return (
    <div className="hero md:min-h-screen bg-gray-50 rounded-t-md">
      <Helmet>
        <title>LandLuxe | Register</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl font-bold">
            Please Register here
          </h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl my-2 bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
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
            {registerError && (
              <p className="text-yellow-500">{registerError}</p>
            )}
            <div className="form-control mt-6">
              <button className="btn bg-sky-400 text-white">Register</button>
            </div>
          </form>
          <ToastContainer />

          <p className="text-center px-2">
            Allready have an account ? please
            <Link to="/login">
              <button className="btn btn-active text-sky-500 btn-link">
                Login
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
