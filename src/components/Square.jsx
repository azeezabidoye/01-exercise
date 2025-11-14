import React from "react";

const Square = ({ colorValue }) => {
  return (
    <section className="square" style={{ background: colorValue }}>
      <p>{colorValue ? colorValue : "Empty Value"}</p>
    </section>
  );
};

export default Square;
