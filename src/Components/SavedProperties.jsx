import { Helmet } from "react-helmet-async";

const SavedProperties = () => {
  return (
    <div className="py-4">
      <Helmet>
        <title>LandLuxe | Saved Properties</title>
      </Helmet>
      <div className="border border-black flex flex-col justify-center rounded-md w-10/12 mx-auto h-[200px]">
        <h2 className=" text-2xl font-semibold align-middle text-center">
          No properties saved yet.
        </h2>
      </div>
      <div className="flex flex-col justify-center rounded-md w-9/12 mx-auto h-[200px]">
        <h2 className=" text-3xl md:text-5xl font-bold align-middle text-center">
          Come Explore with Us and Save Big!
        </h2>
      </div>
      <div className="md:flex gap-5">
        <div className="card md:w-96 bg-base-100 border my-2 border-sky-400 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="/Images/homepage-spot-agent-lg-1.webp"
              alt="image"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-2xl md:text-3xl">
              Browse homes
            </h2>
            <p>
              Find your place with an immersive photo experience and the most
              listings, including things you won’t find anywhere else.
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-md font-bold border-sky-400 text-xl text-sky-500 bg-transparent">
                Browse homes
              </button>
            </div>
          </div>
        </div>
        <div className="card md:w-96 bg-base-100 border my-2 border-sky-400 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="/Images/homepage-spot-rent-lg-1.webp"
              alt="image"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-2xl md:text-3xl">
              Rent a home
            </h2>
            <p>
              We’re creating a seamless online experience – from shopping on the
              largest rental network, to applying, to paying rent.
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-md font-bold border-sky-400 text-xl text-sky-500 bg-transparent">
                Find rentals
              </button>
            </div>
          </div>
        </div>
        <div className="card md:w-96 bg-base-100 border my-2 border-sky-400 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="/Images/homepage-spot-sell-lg-1.webp"
              alt="image"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-2xl md:text-3xl">
              Sell a home
            </h2>
            <p>
              No matter what path you take to sell your home, we can help you
              navigate a successful sale.
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-md font-bold border-sky-400 text-xl text-sky-500 bg-transparent">
                See your options
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedProperties;
