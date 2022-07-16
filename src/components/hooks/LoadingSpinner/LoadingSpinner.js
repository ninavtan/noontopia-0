import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <em>loading...</em>
      <div className="loading-spinner"></div>
    </div>
  );
}