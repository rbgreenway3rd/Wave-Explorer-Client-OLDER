import React, { useRef, useEffect, useState, useContext } from "react";
import { PlateImageContext } from "./PlateImageProvider";
import Typography from "@material-ui/core/Typography";
// import "./PlateImage.css";
import ExperimentMapping from "./ExperimentMapping";
import ExperimentImageDataMapping from "./ExperimentImageMapping";

export const PlateImage = () => {
  const canvasRef = useRef(null);
  var scale = 2;
  var scaledWidth = 1024 * scale;
  var scaledHeight = 1024 * scale;

  const [experiments, setExperiments] = useState([]);
  const [result, setResult] = useState([]);
  const [plate, setPlate] = useState({});

  return (
    <div>
      <ExperimentImageDataMapping />
      {/* <ExperimentMapping /> */}
    </div>
  );
};

export default PlateImage;
