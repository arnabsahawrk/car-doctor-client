import { Carousel, IconButton } from "@material-tailwind/react";
import first from "../../assets/images/homeCarousel/1.jpg";
import second from "../../assets/images/homeCarousel/2.jpg";
import third from "../../assets/images/homeCarousel/3.jpg";
import fourth from "../../assets/images/homeCarousel/4.jpg";

export function HomeCarousel() {
  return (
    <section className="relative rounded-xl">
      <Carousel
        className="rounded-xl"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute bottom-0 !right-4 -translate-x-16 lg:-translate-x-20 -translate-y-2/4 bg-white/30 hover:bg-[#FF3811] w-10 lg:w-12 h-10 lg:h-12 rounded-full z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute bottom-0 !right-4 -translate-y-2/4 bg-[#FF3811] hover:bg-white/30 w-10 lg:w-12 h-10 lg:h-12 rounded-full z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 -translate-x-2/4 gap-2 hidden">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                  activeIndex === i ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        autoplay={true}
        autoplayDelay={5000}
        transition={{
          type: "tween",
          duration: 1,
        }}
        loop={true}
      >
        <img
          src={first}
          alt="image 1"
          className="lg:h-[600px] md:h-[500px] h-[450px] w-full object-cover rounded-xl"
        />
        <img
          src={second}
          alt="image 2"
          className="lg:h-[600px] md:h-[500px] h-[450px] w-full object-cover rounded-xl"
        />
        <img
          src={third}
          alt="image 3"
          className="lg:h-[600px] md:h-[500px] h-[450px] w-full object-cover rounded-xl"
        />
        <img
          src={fourth}
          alt="image 4"
          className="lg:h-[600px] md:h-[500px] h-[450px] w-full object-cover rounded-xl"
        />
      </Carousel>
      {/* Overlay  */}
      <div className="absolute top-0 inset-0 flex flex-col justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
        <div className="text-white ml-6 lg:ml-16 space-y-2 md:space-y-4 lg:space-y-7">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold max-w-[463px]">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-sm md:text-lg max-w-[522px]">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-2 md:gap-4 flex-wrap">
            <button className="bg-[#FF3811] transition duration-700 ease-in-out text-base md:text-lg border-2 border-[#FF3811] py-1 px-2 md:py-2 lg:py-4 md:px-4 lg:px-7 rounded">
              Discover More
            </button>
            <button className="hover:bg-[#FF3811] hover:border-[#FF3811] transition duration-700 ease-in-out text-base md:text-lg border-2 border-white py-1 px-2 md:py-2 lg:py-4 md:px-4 lg:px-7 rounded">
              Latest Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
