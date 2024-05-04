import { useContext, useRef, useState } from "react";
import { ServiceContext } from "../../pages/ServiceDetailsPage";
import { FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";
import video from "../../assets/videos/video.mp4";

const VideoPlayer = (poster) => {
  const videoSrc = video;
  const videoRef = useRef(null);
  const [showPauseButton, setShowPauseButton] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleMouseEnter = () => {
    setShowPauseButton(true);
  };

  const handleMouseLeave = () => {
    setShowPauseButton(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <video
        ref={videoRef}
        className="max-h-[400px] w-full object-cover rounded-lg"
        controls
        muted
        poster={poster.posterImg}
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {showPauseButton && (
        <button
          onClick={handlePlayPause}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white rounded-full p-2"
        >
          {videoRef.current && videoRef.current.paused ? (
            <FaRegCirclePlay className="text-5xl text-[#FF3811]" />
          ) : (
            <FaRegCirclePause className="text-5xl text-[#FF3811]" />
          )}
        </button>
      )}
    </div>
  );
};

const LeftSide = () => {
  const service = useContext(ServiceContext);
  const { img, title, description, facility } = service || {};

  return (
    <div className="xl:col-span-8 space-y-5 lg:space-y-7">
      <img
        className="h-[400px] w-full object-cover rounded-lg"
        src={img}
        alt={title}
      />
      <h2 className="text-[#151515] font-bold text-3xl lg:text-[35px]">
        {title}
      </h2>
      <p className="text-[#737373]">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facility?.map((info, idx) => (
          <div
            key={idx}
            className="border-t-2 border-[#FF3811] rounded-lg p-10 space-y-2"
          >
            <h3 className="text-xl text-[#444] font-bold">{info.name}</h3>
            <p className="text-[#737373]">{info.details}</p>
          </div>
        ))}
      </div>
      <h2 className="text-[#151515] font-bold text-3xl lg:text-[35px]">
        3 Simple Steps to Process
      </h2>
      <p className="text-[#737373]">
        Objectively innovate backend supply chains rather than innovative
        applications. Assertively aggregate premier applications whereas
        out-of-the-box experiences. Dynamically drive market-driven experiences
        for bleeding-edge convergence. Dramatically seize premier users after
        distinctive e-markets. Conveniently expedite client-centered products
        with accurate e-tailers. Distinctively maximize market-driven solutions
        rather than magnetic synergy.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-8 border border-gray-300 rounded-md flex flex-col items-center gap-4 text-center">
          <p className="relative w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="83"
              height="83"
              viewBox="0 0 83 83"
              fill="none"
            >
              <circle
                cx="41.5"
                cy="41.5"
                r="41.5"
                fill="#FF3811"
                fillOpacity="0.1"
              />
              <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
            </svg>
            <span className="absolute inset-0 text-center mt-7 text-white text-xl font-bold">
              01
            </span>
          </p>
          <h3 className="text-xl text-[#151515] font-bold uppercase">
            Step One
          </h3>
          <p className="text-[#737373] text-sm">
            It uses a dictionary of over 200 .
          </p>
        </div>
        <div className="p-8 border border-gray-300 rounded-md flex flex-col items-center gap-4 text-center">
          <p className="relative w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="83"
              height="83"
              viewBox="0 0 83 83"
              fill="none"
            >
              <circle
                cx="41.5"
                cy="41.5"
                r="41.5"
                fill="#FF3811"
                fillOpacity="0.1"
              />
              <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
            </svg>
            <span className="absolute inset-0 text-center mt-7 text-white text-xl font-bold">
              02
            </span>
          </p>
          <h3 className="text-xl text-[#151515] font-bold uppercase">
            Step Two
          </h3>
          <p className="text-[#737373] text-sm">
            It uses a dictionary of over 200 .
          </p>
        </div>
        <div className="p-8 border border-gray-300 rounded-md flex flex-col items-center gap-4 text-center">
          <p className="relative w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="83"
              height="83"
              viewBox="0 0 83 83"
              fill="none"
            >
              <circle
                cx="41.5"
                cy="41.5"
                r="41.5"
                fill="#FF3811"
                fillOpacity="0.1"
              />
              <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
            </svg>
            <span className="absolute inset-0 text-center mt-7 text-white text-xl font-bold">
              03
            </span>
          </p>
          <h3 className="text-xl text-[#151515] font-bold uppercase">
            Step Three
          </h3>
          <p className="text-[#737373] text-sm">
            It uses a dictionary of over 200 .
          </p>
        </div>
      </div>

      <VideoPlayer posterImg={img} />
    </div>
  );
};

export default LeftSide;
