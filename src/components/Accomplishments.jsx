import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaAngleDoubleRight, FaPause, FaPlay } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const certifications = [
  { id: 1, title: "React.js Certification", issuer: "Udemy", image: "https://cdn.create.vista.com/downloads/635c290b-14f2-4d8a-833d-9fe4b84c84a8_1024.jpeg" },
  { id: 2, title: "JavaScript Mastery", issuer: "Coursera", image: "https://campus.w3schools.com/cdn/shop/files/Use_the_W3Schools_Certification_Program_to_validate_and_document_your_competence.The_exams_are_adaptive_and_graded_from_intermediate_to_professional_to_advanced._Passing_the_exams_gra_beef23b2-a901-497b-9af4-725e6fe7ed10_1500x1003.png?v=1721294972" },
  { id: 3, title: "Full-Stack Development", issuer: "freeCodeCamp", image: "https://cdn.educba.com/img/Free-Web-Design-Course-Certificate.jpg" },
  { id: 4, title: "Python for Data Science", issuer: "IBM", image: "https://cdn.create.vista.com/downloads/635c290b-14f2-4d8a-833d-9fe4b84c84a8_1024.jpeg" },
  { id: 5, title: "Frontend Development", issuer: "Scrimba", image: "https://cdn.educba.com/img/Free-Web-Design-Course-Certificate.jpg" },
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
    <div className="w-full mx-auto md:px-14">
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
              <img src={cert.image} alt={cert.title} className="w-full h-60 object-cover mb-4 rounded-xl" />
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
