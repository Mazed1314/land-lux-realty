const Banner = () => {
  return (
    <div
      style={{
        background: "linear-gradient(155deg, #38a169 55%, #fff 0%)",
      }}
      className="hero min-h-screen rounded-t-lg"
    >
      <div className="hero-content flex-col md:flex-row-reverse ">
        <div className="w-8/12 ">
          <img
            src="/public/Images/market-value-of-land-compressor-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="md:w-4/12 ">
          <h1 className="text-2xl lg:text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
