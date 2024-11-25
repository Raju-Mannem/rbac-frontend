import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home";
import Dashboard from "../Dashboard";
import Navbar from "../Navbar";
import Footer from "../Footer/indesx";
import NotFound from "../NotFound";

const Main = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col w-[98.9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
      </div>
  );
};

export default Main;
