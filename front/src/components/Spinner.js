// src/Spinner.js
import React from "react";
import { useLoading } from "../context/LoadingContext";
import LogoBackground from "../images/logo-background.png";
import "../css/main.css";

const Spinner = () => (
  <div className="spinner-container">
    <div className="spinner">
      <img src={LogoBackground} />
    </div>
  </div>
);

const SpinnerWithLoading = () => {
  const { loading } = useLoading(); // Obținem starea de încărcare din context

  if (!loading) return null;

  return <Spinner />;
};

export default SpinnerWithLoading;
