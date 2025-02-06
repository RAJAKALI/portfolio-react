import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return <div>
    <Header/>
    <ScrollToTop/>
    <div className="pt-10">
    <Outlet/>
    </div>
    <Footer/>
  </div>;
};

export default MainLayout;
