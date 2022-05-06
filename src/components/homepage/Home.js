import React from "react";
import { DataVizContainer } from "./dataviz/DataVizContainer";
import { NavBar } from "../nav/NavBar";
export function Home() {
  return (
    <div className="home">
      <NavBar />
      <DataVizContainer />
    </div>
  );
}

export default Home;
