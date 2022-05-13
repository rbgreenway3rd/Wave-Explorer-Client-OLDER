import React, { useState } from "react";

export const PlateImageContext = React.createContext();

export const PlateImageProvider = (props) => {
  const [plateimages, setPlateImage] = useState([]);
  const [result, setResult] = useState([]);

  const getPlateImage = () => {
    return fetch("http://192.168.1.20:8000/plateimage", {
      headers: {
        Authorization: `Token ${localStorage.getItem("waveexplorer_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setPlateImage);
  };

  const getPlateImageById = (id) => {
    return fetch(`http://192.168.1.20:8000/plateimage/${id}?_expand=users`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("waveexplorer_token")}`,
      },
    }).then((res) => res.json());
  };

  return (
    <PlateImageContext.Provider
      value={{
        plateimages,
        getPlateImage,
        getPlateImageById,
      }}
    >
      {props.children}
    </PlateImageContext.Provider>
  );
};
