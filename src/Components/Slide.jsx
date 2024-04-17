import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slide = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="w-full min-h-screen flex flex-col md:flex-row-reverse rounded-t-lg bg-gradient-to-t md:bg-gradient-to-r from-cyan-300 to-cyan-50">
            <div className="md:w-8/12 w-full flex flex-cols justify-center">
              <img
                src="/Images/market-value-of-land-compressor-removebg-preview.png"
                className="w-full rounded-md"
              />
            </div>
            <div className="md:w-4/12 my-auto p-2 mx-4 md:pl-8">
              <h1 className="text-3xl text-center text-white lg:text-5xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                Build Your Dream Home
              </h1>
              <p className="py-6 text-black text-center">
                Discover the perfect canvas for your dream home with our real
                estate company. Let us help you turn your vision into reality,
                from selecting the ideal location to designing every detail.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" hidden min-h-screen md:block">
            <div className="px-2">
              <div
                className="w-full text-center rounded md:min-h-screen"
                style={{
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: "url(/Images/220506-corelogic.png)",
                }}
              >
                <div
                  style={{ background: "rgba(0, 0, 0, 0.2)" }}
                  className="md:min-h-screen rounded flex p-4 items-center"
                >
                  <div className="md:w-4/6 mx-auto">
                    <h1 className="text-2xl text-white lg:text-5xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                      Find Your Dream Plot with us
                    </h1>
                    <p className="py-6 text-white">
                      Explore a wide range of plots with our real estate
                      company, where your dream location awaits. Let us assist
                      you in finding the perfect piece of land to build your
                      ideal home or investment property.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full min-h-screen block md:hidden px-2 rounded-t-lg bg-gradient-to-t md:bg-gradient-to-l from-cyan-300 to-cyan-50">
            <div className="flex flex-col min-h-screen">
              <div className="w-full h-[400px] flex flex-col justify-center p-4">
                <img
                  className="w-full h-[200px]"
                  src="/Images/220506-corelogic.png"
                  alt=""
                />
              </div>
              <div className="p-2 my-auto w-full">
                <h1 className="text-3xl text-center text-white md:text-5xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                  Find Your Dream Plot with us
                </h1>
                <p className="py-6 text-black text-center">
                  Explore a wide range of plots with our real estate company,
                  where your dream location awaits. Let us assist you in finding
                  the perfect piece of land to build your ideal home or
                  investment property.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col min-h-screen md:flex-row rounded-t-lg bg-gradient-to-t md:bg-gradient-to-r from-cyan-300 to-cyan-50">
            <div className="md:w-8/12 py-4 w-full flex justify-center my-auto">
              <img
                className="rounded-full w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
                src="/Images/istockphoto-1409298953-170667a.webp"
                alt=""
              />
            </div>
            <div className="md:w-4/12 my-auto p-2 mx-4 md:pl-8">
              <h1 className="text-3xl text-center text-white lg:text-5xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                We Are Your Trusted Allies
              </h1>
              <p className="py-6 text-black text-center">
                At LandLuxe Realty, we stand as your trusted allies in the realm
                of land real estate. With unwavering reliability and unwavering
                commitment, we offer our expertise and support to guide you
                through every step of your land acquisition journey. Whether
                you're seeking to buy, sell, or invest in land, count on us to
                be by your side, providing unparalleled service and dedication
                to your success.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
