import React from "react";
import { DataVizContainer } from "./dataviz/DataVizContainer";
import { NavBar } from "../nav/NavBar";
import { Footer } from "../footer/Footer";
export function Home() {
  return (
    <div className="home">
      <NavBar />
      <DataVizContainer style={{ height: "auto" }} />
      <Footer />
    </div>
  );
}

export default Home;
