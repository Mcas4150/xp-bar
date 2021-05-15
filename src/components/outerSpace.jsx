import React, { Component } from "react";
import "../BackgroundCanvas.css";

export default class OuterSpace extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var context = canvas.getContext("2d");
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);

    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;

    var fov = 200;

    var point = [];
    var points = [];
    var point3d = [];

    var HALF_WIDTH = width / 2;
    var HALF_HEIGHT = height / 2;

    var numPoints = 1000;
    var x3d = 0;
    var y3d = 0;
    var z3d = 0;

    for (var i = 0; i < numPoints; i++) {
      point = [
        (Math.random() * width) / 2 - width / 4,
        (Math.random() * height) / 2 - height / 4,
        (Math.random() * width) / 2 - width / 4
      ];
      points.push(point);
    }

    function draw() {
      // This just clears the screen
      // context.fillStyle = "rgb(0, 0, 0)";
      context.fillRect(0, 0, width, height);

      // This loop takes a bunch of 3D vertices and draws them using a 2D perspective projection
      for (var i = 0; i < numPoints; i++) {
        // Get a vertex
        point3d = points[i];

        // // Get the z coordinate - this is the depth
        z3d = point3d[2];

        // substract a value - this will move it along the z axis.
        z3d -= 0.4;

        // if the z coordinate for this vertex is less than the Fielf of View (FOV),
        // Add half the width to move it back. This makes an endless starfield.
        // feel free to disable this if you want...
        if (z3d < -fov) z3d += HALF_WIDTH;

        // replace the original z position with this new z position.
        point3d[2] = z3d;

        // Now get all the vertices
        x3d = point3d[0];
        y3d = point3d[1];
        z3d = point3d[2];

        // Decide on the size of the point by taking the FOV and dividing it by the FOV + the z pos
        var scale = fov / (fov + z3d);

        //scale = 1.0;
        // Now create the 2D perspective projection.
        // create a 2D x and y position by multiplying the x and y coordinates by the scale
        // Add half the width and height to translate the coordinates to the origin.
        var x2d = x3d * scale + HALF_WIDTH;
        var y2d = y3d * scale + HALF_HEIGHT;

        // Draw a square of size 'scale', in position x2d, y2d.
        // This code is more complex than you might be used to because it's pure JS.
        context.lineWisdth = scale;
        context.strokeStyle =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        context.beginPath();
        context.moveTo(x2d, y2d);
        context.lineTo(x2d + scale, y2d);
        context.stroke();

        //That really is it...
      }
    }

    setInterval(draw, 50);
  }

  render() {
    return <canvas ref="canvas" />;
  }
}
