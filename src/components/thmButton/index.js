import React from "react";
import "./thmButton.css";

const ThmBtn = ({ text, className }) => {
  return <button className={`thm-btn ${className}`}>{text}</button>;
};

export default ThmBtn;
