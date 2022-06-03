import React, { useRef, useEffect, useState, useContext } from "react";

function ExperimentMapping() {
  const [experiments, setExperiments] = useState([]);

  function getExperiments() {
    return fetch("http://localhost:8000/experiment", {
      headers: {
        Authentication: `Token ${localStorage.getItem("waveexplorer_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setExperiments);
  }

  useEffect(() => {
    getExperiments();
  }, []);

  return (
    <div>
      {experiments.map((experiment) => (
        <div
          className="experiment"
          id={`experiment--${experiment.experimentid}`}
          key={experiment.experimentid}
        >
          <div className="experiment__plate" key={experiment.plateid}>
            <u> Plate id: {experiment.plateid.plateid}</u>
            <div className="experiment__plate__info">
              <div>Owner id: {experiment.plateid.ownerid}</div>
              <div>Barcode: {experiment.plateid.barcode}</div>
              <div>Plate Type id: {experiment.plateid.platetypeid}</div>
              <div>Description: {experiment.plateid.description}</div>
              <div>isPublic: {experiment.plateid.ispublic}</div>
              <div>Project id: {experiment.plateid.projectid}</div>
            </div>
          </div>
          <div className="experiment__info" key={experiment.experimentid}>
            <div>Method id: {experiment.methoid}</div>
            <div>TimeStamp: {experiment.timestamp}</div>
            <div>Description: {experiment.description}</div>
            <div>"horzbinning": {experiment.horzbinning}</div>
            <div>"vertbinning": {experiment.vertbinning}</div>
            <div>"roi_origin_x": {experiment.roi_origin_x}</div>
            <div>"roi_origin_y": {experiment.roi_origin_y}</div>
            <div>"roi_width": {experiment.roi_width}</div>
            <div>"roi_height": {experiment.roi_height}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperimentMapping;
