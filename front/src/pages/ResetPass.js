import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogoBackground from "../images/logo-background.png";
import { getCookie } from "../utils/cookies";
import { useLoading } from "../context/LoadingContext";

const ResetPass = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    fetch("https://awaretherapycenter.ro/accounts/csrf-verification/", {
      credentials: "include",
    }).catch((err) => console.error("CSRF fetch error:", err));
  }, []);

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Emailul este obligatoriu!");
      return false;
    }

    if (!emailRegex.test(email)) {
      setError("Email invalid!");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    startLoading();

    if (!validateForm()) {
      stopLoading();
      return;
    }

    try {
      const response = await fetch(
        "https://awaretherapycenter.ro/accounts/send-code/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-CSRFToken": getCookie("csrftoken"),
          },
          credentials: "include",
          body: new URLSearchParams({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("unverifiedEmail", email);
        localStorage.setItem("verificationType", "reset");
        navigate("/register-verify");
      } else {
        setError(data.error || "A apărut o eroare.");
      }
    } catch (err) {
      setError("Eroare de rețea. Încearcă din nou.");
    } finally {
      stopLoading();
    }
  };

  return (
    <div>
      <Header />
      <div className="register reset-pass">
        <div className="container">
          <div className="box">
            <div className="content">
              <img src={LogoBackground} width={148} alt="logo" />
              <h1>Resetează parola</h1>
              <p>
                Completează câmpul de mai jos pentru a primi instrucțiuni de
                resetare a parolei
              </p>
              <form noValidate onSubmit={handleSubmit}>
                <div className="grid-2">
                  <div className="input-container">
                    <label>Email:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {error && <p className="error">{error}</p>}
                <div className="submit-button">
                  <input
                    type="submit"
                    value="Trimite"
                    className="button primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPass;
