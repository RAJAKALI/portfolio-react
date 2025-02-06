import React, { useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleRight, FaAngleDoubleUp } from "react-icons/fa";

const projects = [
  {
    id: 1,
    image: "https://www.the-future-of-commerce.com/wp-content/uploads/2020/01/what-is-e-commerce-SOCIAL.jpg",
    skills: ["React", "Tailwind", "JavaScript"],
    description: "A modern web application built with React and Tailwind CSS.",
  },
  {
    id: 2,
    image: "https://media.licdn.com/dms/image/v2/D5612AQGb8W36OJmN_Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693507910822?e=2147483647&v=beta&t=T77kC_v0ecdEezw0hYTX1jkZ5r-0SzzeWTuCv7sF-eA",
    skills: ["Node.js", "Express", "MongoDB"],
    description: "A full-stack MERN application with authentication and APIs.",
  },
  {
    id: 3,
    image: "https://www.digitalsilk.com/wp-content/uploads/2020/06/website-development-process-hero-image.png",
    skills: ["Python", "Flask", "SQL"],
    description: "A Python-based web application with RESTful API support.",
  },
  {
    id: 4,
    image: "https://media.istockphoto.com/id/1301010987/vector/website-programming-and-coding-web-development-and-coding-3d-vector-illustrations.jpg?s=612x612&w=0&k=20&c=gLZUAJPFBu2VuEsdlqCWOgy-Cy859BvTDY17bZ_75r0=",
    skills: ["Redux", "React", "Firebase"],
    description: "A real-time chat application using Firebase Firestore.",
  },
  {
    id: 5,
    image: "https://media.istockphoto.com/id/1325167730/vector/concept-of-e-learning-online-education-at-home-3d-realistic-vector-illustration.jpg?s=612x612&w=0&k=20&c=Zb62VoUsxZp1jMMxEiHTMuZC2kCmlf7N3QdnRfqfjEQ=",
    skills: ["Next.js", "GraphQL", "Apollo"],
    description: "A server-side rendered application with GraphQL APIs.",
  },
  {
    id: 6,
    image: "https://www.bedigitech.com/img/web-development.jpg",
    skills: ["TypeScript", "React", "Tailwind"],
    description: "A TypeScript-based web dashboard with analytics.",
  },
];

const HomeProjects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="px-6 md:px-14 py-8 bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-violet-900 font-display font-bold text-lg md:text-xl flex flex-col">
          <p className="flex items-center"><span className="pr-2">PROJECTS </span><FaAngleDoubleRight/></p>
          <span className="text-gray-500 text-xs md:text-sm">Academic Projects, Personal Projects, tasks etc...</span>
        </h1>
        <button 
          className="bg-gradient-to-r from-violet-600 to-teal-400 rounded-lg py-1 px-4 md:px-6 text-slate-50 font-sans flex justify-center items-center"
          onClick={() => setShowAll(!showAll)}
        >
          <span className="pr-2 text-sm whitespace-nowrap">{showAll ? "Show Less" : "View All"}</span>{showAll ? <FaAngleDoubleUp/> : <FaAngleDoubleDown/> }
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 md:gap-x-40 gap-y-8 mt-6">
        {(showAll ? projects : projects.slice(0, 3)).map((project) => (
          <div key={project.id} className="rounded-2xl">
            <img
              src={project.image}
              alt="Project"
              className="w-full h-40 object-cover rounded-lg"
            />
            {/* Skills Capsules */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-violet-100 text-violet-900 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            {/* Project Description */}
            <p className="text-gray-600 mt-3 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProjects;
