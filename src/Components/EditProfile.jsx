import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { ToastContainer, toast } from "react-toastify";

const EditProfile = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        e.target.reset();
        const notifySuccess = () => toast.success("Successfully update");
        notifySuccess();
      })
      .catch((error) => {
        const notifyError = () => toast.error(error.message);
        notifyError();
      });
  };

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
            <form onSubmit={handleUpdate} className="card-body pb-0">
              <div className="form-control">
                <label className="label">
                  <span name="test" className="label-text">
                    New Name
                  </span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder={user.displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">New Photo Link</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder={user.photoURL}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control my-4 py-2">
                <button className="btn btn-sm bg-sky-400 text-white">
                  Update
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
