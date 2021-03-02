import React from "react";
import { useSelector } from "react-redux";

const SnackBar = () => {
  const { msg, show, status } = useSelector((state) => state.snackBarReducer);

  return (
    <div>
      show && (
      <div
        style={
          status === "error"
            ? {
                background: "red",
                position: "absolute",
                top: 15,
                zIndex: 999999,
              }
            : {
                background: "green",
                position: "absolute",
                top: 15,
                zIndex: 999999,
              }
        }
      >
        <p style={{ color: "white" }}> {msg} </p>
      </div>
      )
    </div>
  );
};

export default SnackBar;
