import React, { useRef, useEffect, useState, useContext } from "react";
import Button from "@mui/material/Button";

function ExperimentImageDataMapping() {
  const [images, setImages] = useState([]);

  const [showIndicatorSection, setShowIndicatorSection] = useState(false);
  const [indicatorButtonText, setIndicatorButtonText] = useState(
    "Show Indicator Info"
  );
  const showHideIndicatorSection = () => {
    if (showIndicatorSection === true) {
      setShowIndicatorSection(false);
      setIndicatorButtonText("Show Indicator Info");
    } else {
      setShowIndicatorSection(true);
      setIndicatorButtonText("Hide Indicator Info");
    }
  };

  const [showExperimentSection, setShowExperimentSection] = useState(false);
  const [experimentButtonText, setExperimentButtonText] = useState(
    "Show Experiment Info"
  );
  const showHideExperimentSection = () => {
    if (showExperimentSection === true) {
      setShowExperimentSection(false);
      setExperimentButtonText("Show Experiment Info");
    } else {
      setShowExperimentSection(true);
      setExperimentButtonText("Hide Experiment Info");
    }
  };

  const [showPlateSection, setShowPlateSection] = useState(false);
  const [plateButtonText, setPlateButtonText] = useState("Show Plate Info");
  const showHidePlateSection = () => {
    if (showPlateSection === true) {
      setShowPlateSection(false);
      setPlateButtonText("Show Plate Info");
    } else {
      setShowPlateSection(true);
      setPlateButtonText("Hide Plate Info");
    }
  };

  const [showProjectSection, setShowProjectSection] = useState(false);
  const [projectButtonText, setProjectButtonText] =
    useState("Show Project Info");
  const showHideProjectSection = () => {
    if (showProjectSection === true) {
      setShowProjectSection(false);
      setProjectButtonText("Show Project Info");
    } else {
      setShowProjectSection(true);
      setProjectButtonText("Hide Project Info");
    }
  };

  // <---- NOTE ---->
  // Backend 'experiment_image' view module is configured to only fetch the first 10 items in 'experimentimage' array to manage performance
  // <---- NOTE ---->

  function getExperimentImageData() {
    return fetch("http://localhost:8000/experimentimage", {
      headers: {
        Authentication: `Token ${localStorage.getItem("waveexplorer_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setImages);
  }

  useEffect(() => {
    getExperimentImageData();
  }, []);

  return (
    <div className="container">
      <h1 className="experiment__image__header">Experiment Data:</h1>
      {images.map((image) => (
        <div
          //   className="experiment_image"
          id={`image--${image.experimentimageid}`}
          key={image.experimentimageid}
        >
          <h2>
            Experiment ID:{" "}
            {image.experimentindicatorid.experimentid.experimentid}
          </h2>
          <section>
            <h3 className="experiment__image__id">Basic Info:</h3>
            <div className="experiment__image__id">
              Experiment Image ID: {image.experimentimageid}
            </div>

            <section className="experiment__image__basic">
              <div className="experiment__image__timestamp">
                TimeStamp: {image.timestamp}
              </div>
              <div className="experiment__image__msecs">
                "msecs": {image.msecs}
              </div>
              <div className="experiment__image__maxpixelvalue">
                "maxpixelvalue:" {image.maxpixelvalue}
              </div>
              <div className="experiment__image__compressionalgorithm">
                Compression Algorithm: {image.compressionalgorithm}
              </div>
              <div className="experiment__image__filepath">
                Image File-Path: {image.filepath}
              </div>
            </section>
          </section>
          <section
            className="experiment__image__indicator"
            // key={image.experimentindicatorid.experimentindicatorid}
          >
            <div className="experiment__image__indicator__container">
              <Button
                variant="contained"
                onClick={() => showHideIndicatorSection((prev) => !prev)}
                style={{
                  width: "100%",
                }}
              >
                {indicatorButtonText}
              </Button>
              {showIndicatorSection && (
                <div>
                  <h3>Experiment Image Indicator</h3>
                  <div className="experiment__image__indicator__id">
                    Indicator ID:{" "}
                    {image.experimentindicatorid.experimentindicatorid}
                  </div>
                  <section className="experiment__image__indicator__info">
                    <div className="experiment__image__indicator__excitationfilterdesc">
                      "excitationfilterdesc":{" "}
                      {image.experimentindicatorid.excitationfilterdesc}
                    </div>
                    <div className="experiment__image__indicator__emissionfilterdesc">
                      "emissionfilterdesc":{" "}
                      {image.experimentindicatorid.emissionfilterdesc}
                    </div>
                    <div className="experiment__image__indicator__excitationfilterpos">
                      "excitationfilterpos":{" "}
                      {image.experimentindicatorid.excitationfilterpos}
                    </div>
                    <div className="experiment__image__indicator__emissionfilterpos">
                      "emissionfilterpos":{" "}
                      {image.experimentindicatorid.eemissionfilterpos}
                    </div>
                    <div className="experiment__image__indicator__maskid">
                      Mask ID: {image.experimentindicatorid.maskid}
                    </div>
                    <div className="experiment__image__indicator__exposure">
                      Exposure: {image.experimentindicatorid.exposure}
                    </div>
                    <div className="experiment__image__indicator__gain">
                      Gain: {image.experimentindicatorid.gain}
                    </div>
                    <div className="experiment__image__indicator__preampgain">
                      Pre-Amp Gain: {image.experimentindicatorid.preampgain}
                    </div>
                    <div className="experiment__image__indicator__description">
                      Description: {image.experimentindicatorid.description}
                    </div>
                    <div className="experiment__image__indicator__signaltype">
                      Singal Type: {image.experimentindicatorid.signaltype}
                    </div>
                    <div className="experiment__image__indicator__flatfieldcorrection">
                      Flat-Field Correction:{" "}
                      {image.experimentindicatorid.flatfieldcorrection}
                    </div>
                  </section>
                </div>
              )}
            </div>
          </section>
          <section
            className="experiment"
            // key={image.experimentindicatorid.experimentid.experimentid}
          >
            <div className="experiment__image__experiment__container">
              <Button
                variant="contained"
                onClick={() => showHideExperimentSection((prev) => !prev)}
                style={{
                  width: "100%",
                }}
              >
                {experimentButtonText}
              </Button>
              {showExperimentSection && (
                <div>
                  {/* <PlateImage /> */}
                  <h3>Experiment</h3>
                  <div className="experiment__id">
                    Experiment ID:{" "}
                    {image.experimentindicatorid.experimentid.experimentid}
                  </div>
                  <section className="experiment__info">
                    <div className="experiment__methodid">
                      Method ID:{" "}
                      {image.experimentindicatorid.experimentid.methodid}
                    </div>
                    <div className="experiment__timestamp">
                      TimeStamp:{" "}
                      {image.experimentindicatorid.experimentid.timestamp}
                    </div>
                    <div className="experiment__description">
                      Description:{" "}
                      {image.experimentindicatorid.experimentid.description}
                    </div>
                    <div className="experiment__horzbinning">
                      "horzbinning":{" "}
                      {image.experimentindicatorid.experimentid.horzbinning}
                    </div>
                    <div className="experiment__vertbinning">
                      "vertbinning":{" "}
                      {image.experimentindicatorid.experimentid.vertbinning}
                    </div>
                    <div className="experiment__roi_origin_x">
                      "roi_origin_x":{" "}
                      {image.experimentindicatorid.experimentid.roi_origin_x}
                    </div>
                    <div className="experiment__roi_origin_y">
                      "roi_origin_y":{" "}
                      {image.experimentindicatorid.experimentid.roi_origin_y}
                    </div>
                    <div className="experiment__roi_width">
                      "roi_width":{" "}
                      {image.experimentindicatorid.experimentid.roi_width}
                    </div>
                    <div className="experiment__roi_height">
                      "roi_height":{" "}
                      {image.experimentindicatorid.experimentid.roi_height}
                    </div>
                  </section>
                </div>
              )}
            </div>
          </section>
          <section
            className="plate"
            // key={image.experimentindicatorid.experimentid.plateid.plateid}
          >
            <div className="experiment__image__plate__container">
              <Button
                variant="contained"
                onClick={() => showHidePlateSection((prev) => !prev)}
                style={{
                  width: "100%",
                }}
              >
                {plateButtonText}
              </Button>
              {showPlateSection && (
                <div>
                  <h3>Plate</h3>
                  <div className="plate__id">
                    Plate ID:{" "}
                    {image.experimentindicatorid.experimentid.plateid.plateid}
                  </div>
                  <section className="plate__info">
                    <div className="plate__ownerid">
                      Owner ID:{" "}
                      {image.experimentindicatorid.experimentid.plateid.ownerid}
                    </div>
                    <div className="plate__barcode">
                      Barcode:{" "}
                      {image.experimentindicatorid.experimentid.plateid.barcode}
                    </div>
                    <div className="plate__platetypeid">
                      Plate-Type ID:{" "}
                      {
                        image.experimentindicatorid.experimentid.plateid
                          .platetypeid
                      }
                    </div>
                    <div className="plate__description">
                      Description:{" "}
                      {
                        image.experimentindicatorid.experimentid.plateid
                          .description
                      }
                    </div>
                    <div className="plate__ownerid">
                      Is Public:{" "}
                      {
                        image.experimentindicatorid.experimentid.plateid
                          .ispublic
                      }
                    </div>
                  </section>
                </div>
              )}
            </div>
          </section>
          <section
            className="project"
            // key={image.experimentindicatorid.experimentid.plateid.plateid}
          >
            <div className="experiment__image__project__container">
              <Button
                variant="contained"
                onClick={() => showHideProjectSection((prev) => !prev)}
                style={{
                  width: "100%",
                }}
              >
                {projectButtonText}
              </Button>
              {showProjectSection && (
                <div>
                  <h3>Project</h3>
                  <div className="project__id">
                    Project ID:{" "}
                    {
                      image.experimentindicatorid.experimentid.plateid.projectid
                        .projectid
                    }
                  </div>
                  <section className="project__info">
                    <div className="project__description">
                      Description:{" "}
                      {
                        image.experimentindicatorid.experimentid.plateid
                          .projectid.description
                      }
                    </div>
                    <div className="project__archived">
                      Archived:{" "}
                      {
                        image.experimentindicatorid.experimentid.plateid
                          .projectid.archived
                      }
                    </div>
                    <div className="project__timestamp">
                      TimeStamp:{" "}
                      {
                        image.experimentindicatorid.experimentid.plateid
                          .projectid.timestamp
                      }
                    </div>
                  </section>
                </div>
              )}
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

export default ExperimentImageDataMapping;
