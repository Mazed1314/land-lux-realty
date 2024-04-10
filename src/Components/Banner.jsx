const Banner = () => {
  return (
    <div
      // style={{
      //   background: "linear-gradient(155deg, #16C9F6 55%, #fff 0%)",
      // }}
      className="hero min-h-screen rounded-t-lg bg-gradient-to-t md:bg-gradient-to-r from-cyan-300 to-cyan-50"
    >
      <div className="hero-content flex-col md:flex-row-reverse md:mx-12">
        <div className="carousel w-full">
          <div
            id="slide1"
            className="carousel-item relative w-full h-4/5 my-auto"
          >
            <div className="my-auto mr-2">
              <a href="#slide3">❮</a>
            </div>
            <div className="flex flex-col md:flex-row-reverse">
              <div className="md:w-8/12 w-full">
                <img
                  src="/Images/market-value-of-land-compressor-removebg-preview.png"
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="md:w-4/12 my-auto pl-2">
                <h1 className="text-2xl text-gray-100 lg:text-5xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                  Build Your Dream Home
                </h1>
                <p className="py-6 text-gray-">
                  Discover the perfect canvas for your dream home with our real
                  estate company. Let us help you turn your vision into reality,
                  from selecting the ideal location to designing every detail.
                </p>
              </div>
            </div>
            <div className="my-auto ml-2">
              <a href="#slide2">❯</a>
            </div>
          </div>

          <div
            id="slide2"
            className="carousel-item relative w-full h-4/5 my-auto"
          >
            <div className="my-auto mr-2">
              <a href="#slide1">❮</a>
            </div>
            <div
              className="w-full h-full text-center rounded md:min-h-screen"
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: "url(/Images/220506-corelogic.png)",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #070211 0%, rgba(7, 2, 17, 0) 100%)",
                }}
                className="md:min-h-screen rounded flex p-4 items-center"
              >
                <div className="md:w-4/6 mx-auto">
                  <h1 className="text-2xl text-gray-100 lg:text-5xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                    Find Your Dream Plot with us
                  </h1>
                  <p className="py-6 text-green-100">
                    Explore a wide range of plots with our real estate company,
                    where your dream location awaits. Let us assist you in
                    finding the perfect piece of land to build your ideal home
                    or investment property.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-auto ml-2">
              <a href="#slide3">❯</a>
            </div>
          </div>

          {/* <div
            id="slide3"
            className="carousel-item relative w-full h-4/5 my-auto"
          >
            <div className="my-auto mr-2">
              <a href="#slide2">❮</a>
            </div>
            <div className="">
              <img
                src="/Images/Investing-in-land-is-a-future-investment.jpg"
                alt=""
              />
            </div>
            <div className="my-auto ml-2">
              <a href="#slide1">❯</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
