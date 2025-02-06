import React from "react";
import IntroLeft from "./IntroLeft";
import IntroRight from "./IntroRight";
import BubbleTech from "./BubbleTech";

const Intro = () => {
  return (
    <div className="relative flex md:flex-row flex-col-reverse justify-center items-center w-full h-screen px-14 md:space-y-0 overflow-hidden bg-violet-50">
      {/* Left Section (Text) */}
      <IntroLeft/>

      {/* Right Section (Image and Hover Effects) */}
      <IntroRight/>
      {/* Bubbles with Icons and Animation (Across Entire Screen) */}
     <BubbleTech/>
    </div>
  );
};

export default Intro;

