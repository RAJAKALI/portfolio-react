import React from "react";
import {FaFileAlt} from "react-icons/fa"

const IntroRight = () => {
  return <div className="relative group w-72 h-72 rounded-full overflow-hidden hover:shadow-xl cursor-pointer z-10 md:ml-14 glow-effect mb-5">
        <img
  src="https://avatars.githubusercontent.com/u/86485162?s=400&u=52c1fdc80527cb54b25d4535492db3c44d35d3c5&v=4" // Replace with your actual image URL
  alt="Your Name"
  className="w-full h-full object-cover rounded-full"
/>
  
        {/* Hover Effect - Gradient Border */}
        <div className="absolute inset-0 border-4 border-transparent rounded-full group-hover:border-violet-500 group-hover:animate-gradient transition-all duration-300"></div>
  
        {/* Sliding Resume Overlay */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-end justify-center text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1/2 transition-all duration-300 pb-5">
          <a href="https://drive.google.com/file/d/1JPppaH_w9QOSBV7zVAkxIz0nsGIrsq8F/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-900 text-xl font-semibold flex justify-center items-center">
            <span>Resume</span>
            <FaFileAlt size={20} className="text-gray-900" />
          </a>
        </div>
      </div>;
};

export default IntroRight;
