// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPass from "./pages/ResetPass";
import ConfirmEmail from "./pages/ConfirmEmail";
import SpinnerWithLoading from "./components/Spinner";
import NewPass from "./pages/NewPass";
import RegisterVerify from "./pages/RegisterVerify";
import EventsAdmin from "./pages/EventsAdmin";
import { LoadingProvider } from "./context/LoadingContext";

const App = () => {
  return (
    <LoadingProvider>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
          <Route path="/new-password" element={<NewPass />} />
          <Route path="/register-verify" element={<RegisterVerify />} />
          <Route path="/events-admin" element={<EventsAdmin />} />
        </Routes>
        <SpinnerWithLoading />
        {/* Afișează spinner-ul când e nevoie */}
      </div>
    </LoadingProvider>
  );
};

export default App;
