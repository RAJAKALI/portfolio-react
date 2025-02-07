import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return <div>
    <Header/>
    <ScrollToTop/>
    <div className="pt-10">
    <Outlet/>
    </div>
    <Footer/>
    <ToastContainer />
  </div>;
};

export default MainLayout;
