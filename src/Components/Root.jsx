import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navbar className="mx-2 md:mx-12"></Navbar>
      <Outlet className="mx-2 md:mx-12"></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
