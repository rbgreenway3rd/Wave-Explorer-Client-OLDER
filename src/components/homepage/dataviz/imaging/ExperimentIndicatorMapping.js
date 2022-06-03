import React, { useRef, useEffect, useState, useContext } from "react";

function ExperimentIndicatorMapping() {
  const [experimentIndicators, setExperimentIndicators] = useState([]);

  function getExperimentIndicators() {
    return fetch("http://localhost:8000/experimentindicator", {
      headers: {
        Authentication: `Token ${localStorage.getItem("waveexplorer_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setExperimentIndicators);
  }

  useEffect(() => {
    getExperimentIndicators();
  }, []);

  //   return (
  // <---- NOTE ---->
  // MODULE IS UNFINISHED
  // <---- NOTE ---->
  //   <div>
  //   {experimentIndicators.map((experimentIndicator) => (
  //   <div
  //     className="experimentIndicator"
  //     id={`experimentIndicator--${experimentIndicator.experimentindicatorid}`}
  //     key={experimentIndicator.experimentindicatorid}
  //   >
  //     <div className="experiment__plate" key={experimentIndicator.plateid}>
  //       <u> Plate id: {experimentIndicator.plateid.plateid}</u>
  //       <div className="experiment__plate__info">
  //         <div>Owner id: {experimentIndicator.plateid.ownerid}</div>
  //         <div>Barcode: {experimentIndicator.plateid.barcode}</div>
  //         <div>Plate Type id: {experimentIndicator.plateid.platetypeid}</div>
  //         <div>Description: {experimentIndicator.plateid.description}</div>
  //         <div>isPublic: {experimentIndicator.plateid.ispublic}</div>
  //         <div>Project id: {experimentIndicator.plateid.projectid}</div>
  //       </div>
  //     </div>
  //     <div className="experiment__info" key={experimentIndicator.experimentid}>
  //       <div>Method id: {experimentIndicator.methoid}</div>
  //       <div>TimeStamp: {experimentIndicator.timestamp}</div>
  //       <div>Description: {experimentIndicator.description}</div>
  //       <div>"horzbinning": {experimentIndicator.horzbinning}</div>
  //       <div>"vertbinning": {experimentIndicator.vertbinning}</div>
  //       <div>"roi_origin_x": {experimentIndicator.roi_origin_x}</div>
  //       <div>"roi_origin_y": {experimentIndicator.roi_origin_y}</div>
  //       <div>"roi_width": {experimentIndicator.roi_width}</div>
  //       <div>"roi_height": {experimentIndicator.roi_height}</div>
  //     </div>
  //   </div>
  //   )
  //    )}
  // </div>
  //   );
}

export default ExperimentMapping;
