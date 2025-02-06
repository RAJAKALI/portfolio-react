import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Career = () => {
  const events = [
    {
      university: "Learnyst (Intern)",
      cgpa: "Apr-2024 to Aug-2024",
      stream: "Software Test Engineer",
      image:
        "https://img.freepik.com/free-vector/airport-tower-concept-illustration_114360-9465.jpg?ga=GA1.1.370144144.1727452674&semt=ais_hybrid",
    },
    {
        university: "RGUKT IIIT SRIKAKULAM (B-tech)",
        cgpa: "8.02",
        stream: "Computer Scinece & Engineering 2018-22",
        image:
          "https://img.freepik.com/free-vector/college-campus-concept-illustration_114360-10238.jpg?ga=GA1.1.370144144.1727452674&semt=ais_hybrid",
      },
    {
      university: "RGUKT IIIT SRIKAKULAM (PUC)",
      cgpa: "7.42",
      stream: "MPC 2016-18",
      image:
        "https://img.freepik.com/free-vector/college-students-concept-illustration_114360-10235.jpg?ga=GA1.1.370144144.1727452674&semt=ais_hybrid",
    },
    {
      university: "Government High School (Xth)",
      cgpa: "9.7",
      stream: "Science 2015-16",
      image:
        "https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8269.jpg?ga=GA1.1.370144144.1727452674&semt=ais_hybrid",
    },
  ];

  const getPathData = () => {
    const isSmallScreen = window.innerWidth <= 468; // Adjust threshold as needed
    const offsetX = isSmallScreen ? 100 : 200;

    const points = events.map((_, index) => {
      const y = 100 + index * 200;
      const x =
        index % 2 === 0 ? (isSmallScreen ? 80 : 40) : isSmallScreen ? 120 : 160;
      return { x, y };
    });

    let pathData = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prevPoint = points[i - 1];
      const currentPoint = points[i];
      const controlPoint1 = { x: prevPoint.x, y: prevPoint.y + offsetX };
      const controlPoint2 = { x: currentPoint.x, y: currentPoint.y - offsetX };
      pathData += ` C ${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${currentPoint.x} ${currentPoint.y}`;
    }

    return pathData;
  };

  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col items-center py-10">
      <h1 className="text-violet-900 font-display font-bold text-xl flex flex-col">
        <p className="flex items-center justify-center">
          <FaAngleDoubleRight />
          <span className="pr-2">Career </span>
          <FaAngleDoubleLeft />
        </p>
        <span className="text-gray-500 text-sm">
          Expericace , Graduation, Schooling etc...
        </span>
      </h1>
      {/* Violet Dotted Path */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 800"
        preserveAspectRatio="none"
      >
        <path
          d={getPathData()}
          stroke="rgb(139 92 246)"
          strokeWidth="5"
          strokeDasharray="8 8"
          fill="transparent"
          className="text-violet-500"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {events.map((event, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center w-full max-w-6xl my-20 px-4 ${
            index % 2 === 0 ? "md:justify-start" : "md:justify-end"
          }`}
        >
          {/* Image with Violet Glow */}
          <div
            className={`relative z-10 w-48 h-48 rounded-full group transform transition-all duration-300 hover:scale-110 ${
              index % 2 === 0
                ? "md:order-first md:ml-12"
                : "md:order-last md:mr-12"
            }`}
          >
            <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-xl animate-pulse" />
            <img
              src={event.image}
              alt={event.university}
              className="w-full h-full rounded-full object-cover border-4 border-violet-500/50 shadow-xl shadow-violet-500/20"
            />
          </div>

          {/* University Details */}
          <div
            className={`mt-6 md:mt-0 p-6 ${
              index % 2 === 0 ? "md:text-left" : "md:text-left"
            }`}
          >
            <h3 className="text-2xl font-bold text-violet-600 mb-3 font-display">
              {event.university}
            </h3>
            <div className="space-y-2 text-gray-600">
              <p className="flex justify-start items-center">
                <span className="font-semibold"></span>
                <span className="text-gray-600 font-sans">{event.stream}</span>
              </p>
              <p className="flex justify-start items-center">
                <span className="font-semibold"></span>
                <span className="text-gray-600 font-sans">{event.cgpa}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Career;
