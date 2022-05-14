import "./home.css";
import React, { useRef, useEffect } from "react";

/* 
 || Colors
 ||   Blue: #0095f2
 ||  Green: 
 || Orange: 
 ||   Grey: 
 || D-Grey: 
 ||  Black: #000000
*/

const Home = () => {
  return (
    <div>
      <Node background="#ed9900" />
      <Node background="#0095f2" />
      <Node background="#009100" />
    </div>
  );
};

/* #region Element Definitions */

// Node element
function Node({
  title = "Project Title",
  date = "May 2001 - May 2022",
  description = "Project description in a few sentances.",
  src = "testImage.png",
  alt = "Test Image",
  href = "/",
  background = "blue",
  id,
}) {
  const ref = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--height", height + "px");
    ref.current.style.setProperty("--background-color", background);
  }, []);

  return (
    <div>
      <div className="Node off" ref={ref} id={id}>
        <div className="NodeHeader">
          <img className="NodeImage off" src={src} alt={alt} ref={imgRef} />
          <div className="NodeTitleDate">
            <h1 className="NodeTitle">{title}</h1>
            <p className="NodeDate">{date}</p>
          </div>
        </div>
        <p className="NodeDescription">{description}</p>
        <a
          className="NodeLink"
          href={href}
          target="_self"
          rel="noopener noreferrer"
        >
          See more information →
        </a>
      </div>
      <button
        onClick={() => {
          ref.current.classList.toggle("off");
          ref.current.classList.toggle("on");
          imgRef.current.classList.toggle("off");
          imgRef.current.classList.toggle("on");
        }}
      >
        Test Button
      </button>
    </div>
  );
}

// Smooth Curve Element
function SmoothCurve({ start, end, direction = "vertical", power = 0.5 }) {
  // point variables
  const p0 = start.split(",");
  let p1 = [0, 0];
  let p2 = [0, 0];
  const p3 = end.split(",");

  // p0 coord as ints
  const p0x = parseInt(p0[0], 10);
  const p0y = parseInt(p0[1], 10);

  // p3 coords as ints
  const p3x = parseInt(p3[0], 10);
  const p3y = parseInt(p3[1], 10);

  if (direction === "vertical") {
    let diff = p3y - p0y;
    let pointMod = diff * power;

    p1[0] = p0x;
    p1[1] = p0y + pointMod;

    p2[0] = p3x;
    p2[1] = p3y - pointMod;
  } else if (direction === "horizontal") {
    let diff = p3x - p0x;
    let pointMod = diff * power;

    p1[0] = p0x + pointMod;
    p1[1] = p0y;

    p2[0] = p3x - pointMod;
    p2[1] = p3y;
  }

  let point1 = p1[0] + "," + p1[1];
  let point2 = p2[0] + "," + p2[1];

  return (
    <BezierCurve point0={start} point1={point1} point2={point2} point3={end} />
  );
}

// Bezier Curve element
function BezierCurve({ point0, point1, point2, point3 }) {
  let d = "M" + point0 + " C" + point1 + " " + point2 + " " + point3;

  return (
    <svg
      className="BezierCurve"
      viewBox="0 0 50 50"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d={d} />
    </svg>
  );
}

/* #endregion */

/* #region Functions */

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/* #endregion */

export default Home;