import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  const from = location?.state || "/login";

  if (loading) {
    return (
      <div className="flex justify-center py-6">
        <span className="loading loading-bars text-sky-400 loading-xs"></span>
        <span className="loading loading-bars text-sky-400 loading-sm"></span>
        <span className="loading loading-bars text-sky-400 loading-md"></span>
        <span className="loading loading-bars text-sky-400 loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <>
      <Navigate to={from}></Navigate>;
    </>
  );
};

export default PrivateRoute;
