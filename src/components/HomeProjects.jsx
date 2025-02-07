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
    title: "E-Commerce Website",
    images: [
      "https://www.the-future-of-commerce.com/wp-content/uploads/2020/01/what-is-e-commerce-SOCIAL.jpg",
      "https://www.the-future-of-commerce.com/wp-content/uploads/2020/01/what-is-e-commerce-SOCIAL.jpg",
    ],
    skills: ["React", "Tailwind", "JavaScript", "Redux", "Firebase"],
    description:
      "A modern web application built with React and Tailwind CSS, featuring dynamic UI components, API integration, and a responsive design. Supports various e-commerce functionalities, including a cart, user authentication, and secure payment options.",
    github: "https://github.com/your-repo",
  },
  {
    id: 2,
    title: "MERN Stack App",
    images: [
      "https://media.licdn.com/dms/image/v2/D5612AQGb8W36OJmN_Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693507910822?e=2147483647&v=beta&t=T77kC_v0ecdEezw0hYTX1jkZ5r-0SzzeWTuCv7sF-eA",
    ],
    skills: ["Node.js", "Express", "MongoDB", "GraphQL", "Apollo"],
    description:
      "A full-stack MERN application with authentication, RESTful APIs, and a modern UI built using React and Redux. Implements secure user authentication with JWT, a fully functional backend, and an intuitive frontend interface.",
    github: "https://github.com/your-repo",
  },
  {
    id: 3,
    title: "MERN Stack App",
    images: [
      "https://www.digitalsilk.com/wp-content/uploads/2020/06/website-development-process-hero-image.png",
      "https://www.digitalsilk.com/wp-content/uploads/2020/06/website-development-process-hero-image.png",
    ],
    skills: ["Node.js", "Express", "MongoDB", "GraphQL", "Apollo"],
    description:
      "A full-stack MERN application with authentication, RESTful APIs, and a modern UI built using React and Redux. Implements secure user authentication with JWT, a fully functional backend, and an intuitive frontend interface.",
    github: "https://github.com/your-repo",
  },
  {
    id: 4,
    title: "MERN Stack App",
    images: [
      "https://media.istockphoto.com/id/1301010987/vector/website-programming-and-coding-web-development-and-coding-3d-vector-illustrations.jpg?s=612x612&w=0&k=20&c=gLZUAJPFBu2VuEsdlqCWOgy-Cy859BvTDY17bZ_75r0=",
      "https://media.istockphoto.com/id/1301010987/vector/website-programming-and-coding-web-development-and-coding-3d-vector-illustrations.jpg?s=612x612&w=0&k=20&c=gLZUAJPFBu2VuEsdlqCWOgy-Cy859BvTDY17bZ_75r0=",
    ],
    skills: ["Node.js", "Express", "MongoDB", "GraphQL", "Apollo"],
    description:
      "A full-stack MERN application with authentication, RESTful APIs, and a modern UI built using React and Redux. Implements secure user authentication with JWT, a fully functional backend, and an intuitive frontend interface.",
    github: "https://github.com/your-repo",
  },
  {
    id: 5,
    title: "MERN Stack App",
    images: [
      "https://media.istockphoto.com/id/1325167730/vector/concept-of-e-learning-online-education-at-home-3d-realistic-vector-illustration.jpg?s=612x612&w=0&k=20&c=Zb62VoUsxZp1jMMxEiHTMuZC2kCmlf7N3QdnRfqfjEQ=",
      "https://media.istockphoto.com/id/1325167730/vector/concept-of-e-learning-online-education-at-home-3d-realistic-vector-illustration.jpg?s=612x612&w=0&k=20&c=Zb62VoUsxZp1jMMxEiHTMuZC2kCmlf7N3QdnRfqfjEQ=",
    ],
    skills: ["Node.js", "Express", "MongoDB", "GraphQL", "Apollo"],
    description:
      "A full-stack MERN application with authentication, RESTful APIs, and a modern UI built using React and Redux. Implements secure user authentication with JWT, a fully functional backend, and an intuitive frontend interface.",
    github: "https://github.com/your-repo",
  },
  {
    id: 6,
    title: "MERN Stack App",
    images: [
      "https://www.bedigitech.com/img/web-development.jpg",
      "https://www.bedigitech.com/img/web-development.jpg",
    ],
    skills: ["Node.js", "Express", "MongoDB", "GraphQL", "Apollo"],
    description:
      "A full-stack MERN application with authentication, RESTful APIs, and a modern UI built using React and Redux. Implements secure user authentication with JWT, a fully functional backend, and an intuitive frontend interface.",
    github: "https://github.com/your-repo",
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
