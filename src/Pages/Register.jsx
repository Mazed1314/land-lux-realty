import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState("");

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
        console.log(userCredential.user);
        e.target.reset();
        const notifyS = () => toast.success("Successfully create a user");
        notifyS();
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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Register here</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            {registerError && (
              <p className="text-yellow-500">{registerError}</p>
            )}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <ToastContainer />

          <p className="text-center px-2">
            Allready have an account ? please
            <Link to="/login">
              <button className="btn btn-active btn-link">Login</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
