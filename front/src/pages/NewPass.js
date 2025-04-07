import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogoBackground from "../images/logo-background.png";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/cookies";

const NewPass = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://awaretherapycenter.ro/accounts/csrf-verification/", {
      credentials: "include",
    }).catch((err) => console.error("CSRF fetch error:", err));
  }, []);

  // 🔍 Funcție de validare a parolei
  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!password1 || !password2) {
      setError("Toate câmpurile sunt obligatorii!");
      return false;
    }

    if (!passwordRegex.test(password1)) {
      setError(
        "Parola trebuie să aibă minim 6 caractere, o literă mare și o cifră!"
      );
      return false;
    }

    if (password1 !== password2) {
      setError("Parolele nu coincid.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword()) return;

    const email = localStorage.getItem("unverifiedEmail");

    try {
      const response = await fetch(
        "https://awaretherapycenter.ro/accounts/reset-password/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-CSRFToken": getCookie("csrftoken"),
          },
          credentials: "include",
          body: new URLSearchParams({
            email,
            new_password: password1,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess("Parola a fost schimbată cu succes.");
        setError("");
        localStorage.removeItem("unverifiedEmail");
        localStorage.removeItem("verificationType");
        navigate("/login");
      } else {
        setError(data.error || "Eroare la schimbarea parolei.");
        setSuccess("");
      }
    } catch (err) {
      setError("Eroare de rețea.");
    }
  };

  return (
    <div>
      <Header />
      <div className="register reset-pass confirm-phone new-pass">
        <div className="container">
          <div className="box">
            <div className="content">
              <img src={LogoBackground} width={148} alt="logo" />
              <h1>Setează parola nouă</h1>
              <p>Completează câmpurile de mai jos pentru resetarea parolei</p>
              <form onSubmit={handleSubmit}>
                <div className="grid-2">
                  <div className="input-container">
                    <label>Parola nouă:</label>
                    <input
                      type="password"
                      value={password1}
                      onChange={(e) => setPassword1(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-container">
                    <label>Repetă parola nouă:</label>
                    <input
                      type="password"
                      value={password2}
                      onChange={(e) => setPassword2(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {error && <p className="error">{error}</p>}
                {success && <p className="error">{success}</p>}
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

export default NewPass;
