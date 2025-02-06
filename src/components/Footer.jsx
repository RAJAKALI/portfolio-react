import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className="bg-violet-800 p-2 text-center text-white">© {year} Design & Developed - Raja Kali</footer>;
};

export default Footer;
