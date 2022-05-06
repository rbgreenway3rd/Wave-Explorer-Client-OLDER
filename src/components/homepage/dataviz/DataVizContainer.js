import React, { useState } from "react";
import "./DataVizContainer.css";
import MaxiGraph from "./maxigraph/MaxiGraph";
import MiniGraphs from "./minigraphs/MiniGraphs";
import { PlateImage } from "./imaging/PlateImage";
import Button from "@mui/material/Button";

export function DataVizContainer() {
  const [showImage, setShowImage] = useState(false);
  const showHideDiv = () => {
    if (showImage === true) {
      setShowImage(false);
    } else {
      setShowImage(true);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="minigraphs">
          <MiniGraphs />
        </div>
        <div className="maxigraph">
          <MaxiGraph />
        </div>
      </div>
      <Button variant="contained" onClick={() => showHideDiv((prev) => !prev)}>
        Show Plate Image
      </Button>
      {showImage && (
        <div className="plate_image">
          <PlateImage />
        </div>
      )}
    </div>
  );
}

export default DataVizContainer;
