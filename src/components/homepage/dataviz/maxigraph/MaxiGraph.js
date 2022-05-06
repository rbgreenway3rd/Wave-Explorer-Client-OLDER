import React, { useRef, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import "./MaxiGraph.css";
import MaxiGraphChart from "./MaxiGraphChart";

export const MaxiGraph = () => {
  return (
    <div className="mini-graphs">
      <MaxiGraphChart />
    </div>
  );
};

export default MaxiGraph;
