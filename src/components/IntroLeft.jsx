import React, { useEffect, useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const IntroLeft = () => {
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false); // Track typing state for cursor

  const phrases = [
    "I'm a Frontend Developer",
    "I love web development",
    "Building interactive web pages",
    "I aim to create user-centric",
    "Passionate about coding and design",
    "I'm a Frontend Developer.",
  ];

  useEffect(() => {
    let typingInterval;
    let charIndex = 0;
    const phrase = phrases[currentPhraseIndex];

    const startTyping = () => {
      setTypedText("");
      charIndex = 0;
      setIsTyping(true); // Show cursor when typing starts
      typingInterval = setInterval(() => {
        setTypedText((prevText) => {
          const nextText = phrase.slice(0, charIndex + 1);
          charIndex += 1;
          return nextText;
        });

        if (charIndex === phrase.length) {
          clearInterval(typingInterval);
          setIsTyping(false); // Hide cursor when typing ends
          setTimeout(() => {
            // Move to the next phrase only after a delay (ensure proper transition)
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          }, 1000); // 1-second delay before switching phrase
        }
      }, 100); // Typing speed: 100ms per character
    };

    startTyping(); // Start typing the current phrase

    return () => {
      clearInterval(typingInterval); // Clean up interval if component unmounts
      setIsTyping(false); // Cleanup typing state
    };
  }, [currentPhraseIndex]); // Dependency on currentPhraseIndex to trigger re-run of effect

  // Smooth scrolling function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60, // Adjust for fixed header
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-4 text-center md:text-left relative z-10 md:w-1/2">
      <p className="text-xl md:text-3xl font-semibold text-gray-600">
        Hi, I'm Raja Kali
      </p>
      <blockquote className="text-xl md:text-2xl font-semibold text-violet-800">
        <span className="inline-block">
          {typedText}
          {/* Blinking cursor */}
          {isTyping && <span className="ml-1 animate-blink">|</span>}
        </span>
      </blockquote>

      <p className="text-lg text-gray-600">
        Passionate about building intuitive and interactive web applications. I
        aim to create user-centric experiences with every line of code.
      </p>

      <div className="pt-4 flex">
        {/* Know More -> Scroll to Projects */}
        <button
          onClick={() => scrollToSection("projects")}
          className="py-4 px-6 border bg-white rounded-lg mr-2 flex justify-center items-center space-x-1 hover:bg-slate-50 hover:text-violet-600 whitespace-nowrap"
        >
          <span>Know More</span>
          <FaAngleDoubleDown />
        </button>

        {/* Get In Touch -> Scroll to Contact */}
        <button
          onClick={() => scrollToSection("contact")}
          className="py-4 px-6 border bg-violet-600 rounded-lg text-white hover:bg-violet-400 whitespace-nowrap"
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default IntroLeft;
