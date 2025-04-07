import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogoBackground from "../images/logo-background.png";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/cookies";
import { useLoading } from "../context/LoadingContext";

const RegisterVerify = () => {
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const email = localStorage.getItem("unverifiedEmail");
  const verificationType = localStorage.getItem("verificationType");

  useEffect(() => {
    const email = localStorage.getItem("unverifiedEmail");
    const type = localStorage.getItem("verificationType");

    if (!email || !type) {
      navigate("/login");
      return;
    }

    fetch("https://awaretherapycenter.ro/accounts/csrf-verification/", {
      credentials: "include",
    });
  }, [navigate]);

  // ✅ Blochează back-ul și redirecționează către login
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    const handleBack = () => {
      navigate("/login", { replace: true });
    };
    window.addEventListener("popstate", handleBack);
    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    startLoading();

    try {
      const response = await fetch(
        "https://awaretherapycenter.ro/accounts/verify-code/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-CSRFToken": getCookie("csrftoken"),
          },
          credentials: "include",
          body: new URLSearchParams({ email, code }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess("Codul este corect.");
        setError("");

        if (verificationType === "register") {
          localStorage.clear();
          navigate("/login");
        } else if (verificationType === "reset") {
          navigate("/new-password");
        }
      } else {
        setError("Cod invalid sau expirat.");
        setSuccess("");
      }
    } catch (err) {
      setError("Eroare de rețea.");
      setSuccess("");
    } finally {
      stopLoading();
    }
  };

  return (
    <div>
      <Header />
      <div className="register reset-pass confirm-phone">
        <div className="container">
          <div className="box">
            <div className="content">
              <img src={LogoBackground} width={148} alt="Logo" />
              <h1>Confirmă codul</h1>
              <p>Introdu mai jos codul de verificare pentru a continua</p>

              <form onSubmit={handleSubmit}>
                <div className="grid-2">
                  <div className="input-container">
                    <label>Introdu codul:</label>
                    <input
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}

                <div className="submit-button">
                  <input
                    type="submit"
                    value="Verifică"
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

export default RegisterVerify;
