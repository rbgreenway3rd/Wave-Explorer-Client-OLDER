import React, { useState } from "react";
import "./DataVizContainer.css";
import MaxiGraph from "./maxigraph/MaxiGraph";
import MiniGraphs from "./minigraphs/MiniGraphs";
import { PlateImage } from "./imaging/PlateImage";
import Button from "@mui/material/Button";

export function DataVizContainer() {
  const [showImage, setShowImage] = useState(false);
  const [buttonText, setButtonText] = useState("Show Plate Image");
  const showHideDiv = () => {
    if (showImage === true) {
      setShowImage(false);
      setButtonText("Show Plate Image");
    } else {
      setShowImage(true);
      setButtonText("Hide Plate Image");
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
      <div className="image_container">
        <Button
          variant="contained"
          onClick={() => showHideDiv((prev) => !prev)}
          style={{
            width: "100%",
          }}
        >
          {buttonText}
        </Button>
        {showImage && (
          <div className="plate_image">
            <PlateImage />
          </div>
        )}
      </div>
    </div>
  );
}

export default DataVizContainer;
