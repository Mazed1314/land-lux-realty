import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Estate from "../Components/Estate";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LandLuxe | Home</title>
      </Helmet>
      <Banner></Banner>
      <Estate></Estate>
    </div>
  );
};

export default Home;
