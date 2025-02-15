import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const Login = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // console.log("location in the login page", location);
  // const from = location?.state ? location.state : "/profile";
  const { register, handleSubmit } = useForm();

  const { signInUser, signInWithGoogle, signInWithGitHub } =
    useContext(AuthContext);
  const [show, setShow] = useState("false");

  const handleGoogle = () => {
    signInWithGoogle()
      .then((userCredential) => {
        console.log(userCredential.user);
        const notifyGoogle = () => toast.success("Successfully Google Login");
        notifyGoogle();
        // if (userCredential.user) {
        //   navigate(from);
        // }
      })
      .catch((error) => {
        console.error(error);
        const GlError = error.message;
        const notifyGlError = () => toast.error(GlError);
        notifyGlError();
      });
  };
  const handleGithub = () => {
    signInWithGitHub()
      .then((userCredential) => {
        console.log(userCredential.user);
        // navigate(from);
        const notifyGit = () => toast.success("Successfully Github Login");
        notifyGit();
      })
      .catch((error) => {
        console.error(error);
        const GitError = error.message;
        const notifyGitError = () => toast.error(GitError);
        notifyGitError();
      });
  };
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   console.log(email, password);

  //   signInUser(email, password)
  //     .then((userCredential) => {
  //       console.log(userCredential.user);
  //       e.target.reset();
  //       // navigate(from);

  //       const notifyLogin = () => toast.success("Successfully Login");
  //       notifyLogin();
  //     })
  //     .catch((error) => {
  //       console.error(error.message);
  //       const notify = () => toast.error("Wrong email or password");
  //       notify();
  //     });
  // };

  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        // e.target.reset();
        // navigate(from);

        const notifyLogin = () => toast.success("Successfully Login");
        notifyLogin();
      })
      .catch((error) => {
        console.error(error.message);
        const notify = () => toast.error("Wrong email or password");
        notify();
      });
  };

  return (
    <div className="hero md:min-h-screen bg-gray-50 rounded-t-md">
      <Helmet>
        <title>LandLuxe | Login</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
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
                {...register("password", { required: true })}
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
