import React, { useState, useEffect } from "react";

const Errors = ({ err }) => {
  const [visibility, setVisibility] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setVisibility("hidden");
      setPosition("absolute");
    }, 3000);
  }, []);
  return (
    <div>
      <div
        className="alert alert-danger"
        style={{ visibility: visibility, position: position }}
        role="alert"
      >
        {err}
      </div>
    </div>
  );
};

export default Errors;
