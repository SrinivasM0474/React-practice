import React from "react";
// import { Link } from "react-router-dom";

function ErrorFallBack() {
  return (
    <div>
      <h1>OOPS something went wrong!!!!</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/";
        }}
      >
        Retry
      </button>
    </div>
  );
}

export default ErrorFallBack;
