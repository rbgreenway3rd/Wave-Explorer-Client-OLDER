import React, { useRef, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import "./MiniGraphs.css";
import MiniGraphCharts from "./MiniGraphCharts";

export const MiniGraphs = () => {
  return (
    <div className="mini-graphs">
      <MiniGraphCharts />
    </div>
  );
};

export default MiniGraphs;
