import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./nav/NavBar";
import { Home } from "./homepage/Home";
import { Footer } from "./footer/Footer";
export const ApplicationViews = () => {
  return (
    <>
      <main>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default ApplicationViews;
