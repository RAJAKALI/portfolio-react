import React from "react";
import { FaReact, FaJs, FaCss3Alt, FaNodeJs, FaHtml5, FaDatabase, } from "react-icons/fa"; // Technology Icons

const BubbleTech = () => {
  return  <div className="absolute inset-0 pointer-events-none">
  {["React", "JavaScript", "CSS", "Node.js", "HTML", "Database"].map((tech, idx) => (
    <div
      key={idx}
      className="bubble border border-violet-500 bg-gradient-to-r from-violet-300 text-violet-500 rounded-full p-2 text-sm font-medium animate-bubble absolute"
      style={{
        top: `${Math.random() * 90}%`, // Random positioning within screen height
        left: `${Math.random() * 90}%`, // Random positioning within screen width
        animationDelay: `${Math.random() * 2}s`,
      }}
    >
      {/* Dynamically Render Icons */}
      {tech === "React" && <FaReact size={24} />}
      {tech === "JavaScript" && <FaJs size={24} />}
      {tech === "CSS" && <FaCss3Alt size={24} />}
      {tech === "Node.js" && <FaNodeJs size={24} />}
      {tech === "HTML" && <FaHtml5 size={24} />}
      {tech === "Database" && <FaDatabase size={24} />}
    </div>
  ))}
</div>;
};

export default BubbleTech;
