import React, { useState } from "react";

function Square({ value, fillCell }) {
  return (
    <div className="cell" onClick={() => fillCell()}>
      {value}
    </div>
  );
}

export default Square;
