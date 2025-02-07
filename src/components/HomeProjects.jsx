import React, { useState } from "react";
import {
  FaAngleDoubleDown,
  FaAngleDoubleRight,
  FaAngleDoubleUp,
  FaTimes,
  FaGithub,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const projects = [
  {
    id: 1,
    title: "ProjPort",
    images: [
      "https://www.digitalsilk.com/wp-content/uploads/2020/06/website-development-process-hero-image.png",
      "https://www.the-future-of-commerce.com/wp-content/uploads/2020/01/what-is-e-commerce-SOCIAL.jpg",
      "https://www.the-future-of-commerce.com/wp-content/uploads/2020/01/what-is-e-commerce-SOCIAL.jpg",
    ],
    skills: ["React.js", "Tailwind", "JavaScript", "Php", ],
    description:
      "Developed a platform providing job opportunities, project requests, and student services with a modern interface to enhance user experience.",
    github: "https://github.com/RAJAKALI",
  },
  {
    id: 2,
    title: "E-Commerce web",
    images: [
      "https://img.freepik.com/premium-photo/laptop-with-digital-storefront-shopping-cart-credit-cards-surrounded-by-plants-colorful-background_34950-23714.jpg?ga=GA1.1.370144144.1727452674&semt=ais_incoming",
      "https://www.the-future-of-commerce.com/wp-content/uploads/2020/01/what-is-e-commerce-SOCIAL.jpg",
      "https://media.licdn.com/dms/image/v2/D5612AQGb8W36OJmN_Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693507910822?e=2147483647&v=beta&t=T77kC_v0ecdEezw0hYTX1jkZ5r-0SzzeWTuCv7sF-eA",
      "https://www.the-future-of-commerce.com/wp-content/uploads/2020/01/what-is-e-commerce-SOCIAL.jpg",
    ],
    skills: ["React.js", "Redux", "Tailwind", "Spring", "JavaScript"],
    description:
      "Developed a dynamic and responsive e-commerce platform with product browsing, cart management, and checkout features. Streamlined backend development for efficient operations. Designed an intuitive user interface",
    github: "https://github.com/project-team1241/ecommerce_frontend",
  },
  {
    id: 3,
    title: "Food App",
    images: [
      "https://img.freepik.com/premium-vector/food-festival-app-interface-template_107173-12512.jpg?ga=GA1.1.370144144.1727452674&semt=ais_incoming",
      "https://www.digitalsilk.com/wp-content/uploads/2020/06/website-development-process-hero-image.png",
      "https://www.digitalsilk.com/wp-content/uploads/2020/06/website-development-process-hero-image.png",
    ],
    skills: ["React.js", "Tailwind", "Redux", "Swiggy API",],
    description:
      "Built a responsive web application displaying food items fetched from an external API, allowing users to view item details and add items to a cart. Optimized state management and ensure seamless updates.",
    github: "https://github.com/RAJAKALI/food-app-react",
  },
  {
    id: 4,
    title: "Design Column Beam App",
    images: [
      "https://img.freepik.com/premium-photo/engineer-working-construction-project-using-laptop_1155284-16419.jpg?ga=GA1.1.370144144.1727452674&semt=ais_incoming",
      "https://media.istockphoto.com/id/1301010987/vector/website-programming-and-coding-web-development-and-coding-3d-vector-illustrations.jpg?s=612x612&w=0&k=20&c=gLZUAJPFBu2VuEsdlqCWOgy-Cy859BvTDY17bZ_75r0=",
      "https://media.istockphoto.com/id/1301010987/vector/website-programming-and-coding-web-development-and-coding-3d-vector-illustrations.jpg?s=612x612&w=0&k=20&c=gLZUAJPFBu2VuEsdlqCWOgy-Cy859BvTDY17bZ_75r0=",
    ],
    skills: ["Flutter", "Dart", ],
    description:
      "A mobile application that can calculate safety precautions for columns and beams used for building constructions which indeed help civil engineers to take measure before planning the constructions.",
    github: "https://github.com/RAJAKALI/Major-Project-CB-Design",
  },
  {
    id: 5,
    title: "Academic Managment System",
    images: [
      "https://media.istockphoto.com/id/1325167730/vector/concept-of-e-learning-online-education-at-home-3d-realistic-vector-illustration.jpg?s=612x612&w=0&k=20&c=Zb62VoUsxZp1jMMxEiHTMuZC2kCmlf7N3QdnRfqfjEQ=",
      "https://media.istockphoto.com/id/1325167730/vector/concept-of-e-learning-online-education-at-home-3d-realistic-vector-illustration.jpg?s=612x612&w=0&k=20&c=Zb62VoUsxZp1jMMxEiHTMuZC2kCmlf7N3QdnRfqfjEQ=",
    ],
    skills: ["Boostrap", "JavaScript", "Css", "Html", "Django"],
    description:
      "An Academics Management System that simplifies the management of tasks like attendance, grades, projects, and assignments. It provides an intuitive portal for administrators and students to efficiently handle course-related activities.",
    github: "https://github.com/RAJAKALI/Academic-Management-System",
  },
  {
    id: 6,
    title: "F.A.G.V.I.P",
    images: [
      "https://img.freepik.com/free-vector/people-check-money-accounts_74855-4452.jpg?ga=GA1.1.370144144.1727452674&semt=ais_incoming",
      "https://www.bedigitech.com/img/web-development.jpg",
    ],
    skills: ["Python", "OpenCV", "Image Processing", "GTTS",],
    description:
      "A web-based application designed to assist visually impaired users in verifying purchased goods with accuracy. It allows users to capture images, which are processed to provide audio descriptions through speech detection",
    github: "https://github.com/RAJAKALI/Mini-Project",
  },
];

const HomeProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="px-6 md:px-14 py-8 bg-white">
      <div className="flex justify-between items-center">
        <h1 className="text-violet-900 font-display font-bold text-lg md:text-xl flex flex-col">
          <p className="flex items-center">
            <span className="pr-2">PROJECTS </span>
            <FaAngleDoubleRight />
          </p>
          <span className="text-gray-500 text-xs md:text-sm">
            Academic Projects, Personal Projects, tasks etc...
          </span>
        </h1>
        <button
          className="bg-gradient-to-r from-violet-600 to-teal-400 rounded-lg py-1 px-4 md:px-6 text-slate-50 font-sans flex justify-center items-center"
          onClick={() => setShowAll(!showAll)}
        >
          <span className="pr-2 text-sm whitespace-nowrap">
            {showAll ? "Show Less" : "View All"}
          </span>
          {showAll ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 md:gap-x-40 gap-y-8 mt-6">
        {(showAll ? projects : projects.slice(0, 3)).map((project) => (
          <div key={project.id} className="rounded-2xl">
            <h2 className="text-md font-bold text-violet-900 mb-2">
              {project.title}
            </h2>
            <div className="relative">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg"
              >
                <FaGithub size={20} className="text-gray-700" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {project.skills.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-violet-100 text-violet-900 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mt-3 text-sm line-clamp-2">
              {project.description.substring(0, 100)}...
            </p>
            <button
              className="text-violet-700 font-base mt-2"
              onClick={() => setSelectedProject(project)}
            >
              More
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative">
            <button
              className="absolute top-4 right-4 text-gray-500"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes size={20} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  modules={[Navigation]}
                >
                  {selectedProject.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative">
                        <img
                          src={img}
                          alt={selectedProject.title}
                          className="w-full h-60 object-cover rounded-lg"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div>
                <div className="flex justify-start items-center">
                  <h2 className="text-xl font-bold text-violet-900 mb-2">
                    {selectedProject.title}
                  </h2>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-violet-400 p-2 mb-2 ml-2 rounded-full shadow-lg"
                  >
                    <FaGithub size={20} className="text-gray-700" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-violet-100 text-violet-900 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeProjects;
