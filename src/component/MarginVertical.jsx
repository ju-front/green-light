import React from "react";

const MarginVertical = ({ value }) => {
  return (
    <div className="margin" style={{ margin: 0, padding: 0, height: `${value}px` }}></div>
  );
};

export default MarginVertical;
