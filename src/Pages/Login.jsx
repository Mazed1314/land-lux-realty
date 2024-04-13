import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const { signInUser, signInWithGoogle, signInWithGitHub } =
    useContext(AuthContext);
  const [show, setShow] = useState("false");

  const handleGoogle = (e) => {
    signInWithGoogle()
      .then((userCredential) => {
        console.log(userCredential.user);
        e.target.reset();
        const notifyGl = () => toast.success("Successfully Google Login");
        notifyGl();
      })
      .catch((error) => {
        console.error(error);
        const GlError = error.message;
        const notifyGlError = () => toast.error(GlError);
        notifyGlError();
      });
  };
  const handleGithub = (e) => {
    signInWithGitHub()
      .then((userCredential) => {
        console.log(userCredential.user);
        e.target.reset();
        const notifyG = () => toast.success("Successfully Github Login");
        notifyG();
      })
      .catch((error) => {
        console.error(error);
        const GitError = error.message;
        const notifyGitError = () => toast.error(GitError);
        notifyGitError();
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        e.target.reset();
        const notifyS = () => toast.success("Successfully Login");
        notifyS();
      })
      .catch((error) => {
        console.error(error);
        const notify = () => toast.error("Wrong email or password");
        notify();
      });
  };
  return (
    <div className="hero md:min-h-screen bg-black rounded-t-md">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl text-white font-bold">
            Login now!
          </h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body pb-0">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-sky-400 text-white">Login</button>
            </div>
          </form>
          <ToastContainer />
          <p className="text-center">
            New here ? Please{" "}
            <Link to="/register">
              <button className="btn btn-active btn-link text-sky-500">
                Register
              </button>
            </Link>
          </p>
          <p className="text-center">Sign in with</p>
          <p className="flex justify-center my-4 gap-4">
            <a
              onClick={handleGoogle}
              className="px-2 border rounded-full btn btn-sm"
            >
              <FcGoogle />
            </a>
            <a
              onClick={handleGithub}
              className="px-2 border rounded-full btn btn-sm text-xl"
            >
              <FaGithub />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
