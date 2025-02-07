import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaAngleDoubleRight, FaPause, FaPlay } from "react-icons/fa";
import Reactpic from "../assets/React.png";
import Javapic from "../assets/java.png";
import Pythonpic from "../assets/python.png";
import Gitpic from "../assets/git.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const certifications = [
  { id: 1, title: "React.js ", issuer: "Scaler", image:Reactpic },
  { id: 2, title: "Java", issuer: "Udemy", image:Javapic },
  { id: 3, title: "Python", issuer: "Udemy", image: Pythonpic},
  { id: 4, title: "Git", issuer: "Udemy", image: Gitpic },
];

const Accomplishments = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef(null);

  // Toggle Play/Pause
  const handleAutoplayToggle = () => {
    if (!swiperRef.current) return;

    if (isPlaying) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full mx-auto md:px-14 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-violet-900 font-display font-bold text-xl flex flex-col py-2 my-2">
          <p className="flex items-center justify-start">
            <span className="pr-2">Accomplishments</span>
            <FaAngleDoubleRight />
          </p>
          <span className="text-gray-500 text-sm">Certifications, WorkShops, etc...</span>
        </h1>
        
        {/* Play/Pause Button */}
        <button
          onClick={handleAutoplayToggle}
          className="text-violet-900 text-lg p-2 border border-violet-900 rounded-full"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          340: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
      >
        {certifications.map((cert) => (
          <SwiperSlide key={cert.id}>
            <div className="rounded-xl text-center">
              <img src={cert.image} alt={cert.title} className="w-full h-60 object-fit mb-4" />
              <h3 className="text-lg font-bold text-violet-600">{cert.title}</h3>
              <p className="text-gray-500">{cert.issuer}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Accomplishments;
