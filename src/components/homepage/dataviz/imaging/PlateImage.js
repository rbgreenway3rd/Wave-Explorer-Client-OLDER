import React, { useRef, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import "./PlateImage.css";

export const PlateImage = () => {
  const canvasRef = useRef(null);
  var scale = 2;
  var scaledWidth = 1024 * scale;
  var scaledHeight = 1024 * scale;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    var imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);
    var pixels = imageData.data;

    var x = Math.floor(Math.random() * canvasWidth);
    var y = Math.floor(Math.random() * canvasHeight);
    var r = Math.floor(Math.random() * 255); //changed from 256... not sure which is correct
    var g = Math.floor(Math.random() * 255); //
    var b = Math.floor(Math.random() * 255); //
    var off = (y * imageData.width + x) * 4;
    pixels[off] = r;
    pixels[off + 1] = g;
    pixels[off + 2] = b;
    pixels[off + 3] = 255;

    context.fillStyle = "#000000";

    context.fillRect(x, y, x, y); //randomized fill
  }, []);

  return (
    <div className="image-container">
      <h4>PlateImage using canvas element</h4>
      <canvas
        className="plateimage"
        id="canvas"
        ref={canvasRef}
        width={scaledWidth}
        height={scaledHeight}
      >
        Error: content is unable to be read... or your current browser does not
        support canvas element
      </canvas>
    </div>
  );
};

export default PlateImage;
