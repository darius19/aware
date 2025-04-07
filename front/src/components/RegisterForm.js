import React, { useState, useEffect } from "react";
import axios from "../api/axiosInstance";
import { getCookie } from "../utils/cookies";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../context/LoadingContext";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    rpassword: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    axios.get("/accounts/csrf/").catch(() => {});
    localStorage.removeItem("emailVerified");
    localStorage.removeItem("emailConfirmed");
    localStorage.removeItem("unverifiedEmail");
    localStorage.removeItem("verificationType");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
    setServerError("");
  };

  const validateForm = () => {
    const newErrors = {};
    const nameRegex =
      /^[A-Za-zĂÎȘȚâăîșțóçéüöőűáúéíó]+(?:[\s'-][A-Za-zĂÎȘȚâăîșțóçéüöőűáúéíó]+)*$/u;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "Acest câmp este obligatoriu!";
      }
    });

    if (formData.first_name && !nameRegex.test(formData.first_name)) {
      newErrors.first_name = "Prenumele nu este valid!";
    }

    if (formData.last_name && !nameRegex.test(formData.last_name)) {
      newErrors.last_name = "Numele nu este valid!";
    }

    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Email invalid!";
    }

    if (formData.password && !passwordRegex.test(formData.password)) {
      newErrors.password =
        "Parola trebuie să aibă minim 6 caractere, o literă mare și o cifră!";
    }

    if (formData.password !== formData.rpassword) {
      newErrors.rpassword = "Parolele nu coincid!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    startLoading();

    if (!validateForm()) {
      stopLoading();
      return;
    }

    const csrfToken = getCookie("csrftoken");

    const response = await axios.post("/accounts/register/", formData, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
    });

    if (response?.__handled) {
      const status = response.originalError.response?.status;
      const errorData = response.originalError.response?.data;

      if (status === 400) {
        if (errorData?.error === "Email already exists") {
          setErrors((prev) => ({
            ...prev,
            email: "Email deja înregistrat!",
          }));
        } else if (errorData?.error === "Your account needs to be verified.") {
          setServerError(
            "Contul tau nu este verificat. Vei fi redirectionat pentru a incepe verificarea"
          );

          localStorage.setItem("unverifiedEmail", formData.email);
          localStorage.setItem("verificationType", "register");

          setTimeout(() => {
            navigate("/confirm-email");
          }, 3000);
          stopLoading();
        }
      } else {
        setServerError("A apărut o eroare. Încearcă mai târziu.");
      }

      stopLoading();
      return;
    }

    // înregistrare reușită
    localStorage.setItem("unverifiedEmail", formData.email);
    localStorage.setItem("verificationType", "register");
    localStorage.setItem("emailConfirmed", "false");
    navigate("/confirm-email");
    stopLoading();
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="grid-2">
        <div className="input-container">
          <label>Nume:</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
          {errors.last_name && <p className="error">{errors.last_name}</p>}
        </div>
        <div className="input-container">
          <label>Prenume:</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
          {errors.first_name && <p className="error">{errors.first_name}</p>}
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="input-container">
          <label>Parola:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="input-container full">
          <label>Repetă parola:</label>
          <input
            type="password"
            name="rpassword"
            value={formData.rpassword}
            onChange={handleChange}
          />
          {errors.rpassword && <p className="error">{errors.rpassword}</p>}
        </div>
      </div>

      {serverError && (
        <p className="error server-error redirect-p">{serverError}</p>
      )}

      <div className="submit-button">
        <button type="submit" className="button primary">
          Înregistrează-te
        </button>
      </div>

      <div className="redirect-page">
        Ai deja un cont? <a href="/login">Autentifică-te aici!</a>
      </div>
    </form>
  );
};

export default RegisterForm;
