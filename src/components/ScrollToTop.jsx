import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-2 right-3 bg-violet-700 text-white p-2 rounded-full shadow-lg transition-opacity duration-300 z-30 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FaAngleDoubleUp size={24} />
    </button>
  );
};

export default ScrollToTop;
