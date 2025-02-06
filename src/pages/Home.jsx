// import React from "react";
// import Intro from "../components/Intro";
// import HomeProjects from "../components/HomeProjects";
// import Career from "../components/Career";
// import Accomplishments from "../components/Accomplishments";
// import Contact from "../components/Contact";

// const Home = () => {
//   return <div>
//     <Intro/>
//     <HomeProjects/>
//     <Career/>
//     <Accomplishments/>
//     <Contact/>
//     </div>;
// };

// export default Home;

import React from "react";
import Intro from "../components/Intro";
import HomeProjects from "../components/HomeProjects";
import Career from "../components/Career";
import Accomplishments from "../components/Accomplishments";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <div id="home">
        <Intro />
      </div>
      <div id="projects">
        <HomeProjects />
      </div>
      <div id="career">
        <Career />
      </div>
      <div id="accomplishments">
        <Accomplishments />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;

