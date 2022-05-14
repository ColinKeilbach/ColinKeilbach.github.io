import "./timeline.css";
import React from "react";

const Timeline = () => {
  return (
    <div>
      <p>This will be a timeline of all of the projects I have done.</p>
      <TimelineItem />
    </div>
  );
};

function TimelineItem() {
  return (
    <div>
      <button>Test</button>
    </div>
  );
}

export default Timeline;
