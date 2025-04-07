import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogoBackground from "../images/logo-background.png"; // sau ../assets, în funcție de locația ta
import { getCookie } from "../utils/cookies"; // ajustează calea dacă trebuie
import { useLoading } from "../context/LoadingContext";

function maskEmail(email) {
  const [user, domain] = email.split("@");
  const maskedUser =
    user.length > 2 ? user.slice(0, 2) + "***" : user[0] + "***";
  return `${maskedUser}@${domain}`;
}

const ConfirmEmail = () => {
  const { startLoading, stopLoading } = useLoading();
  const [maskedEmail, setMaskedEmail] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const email = localStorage.getItem("unverifiedEmail");
  
    if (!email) {
      navigate("/login"); 
      return;
    }
  
    fetch("https://awaretherapycenter.ro/accounts/csrf-verification/", {
      credentials: "include",
    });
  
    setMaskedEmail(maskEmail(email));
  }, []);
  

  const sendVerificationRequest = async (email) => {
    startLoading();

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
        localStorage.setItem("emailConfirmed", "true");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("unverifiedEmail");

    if (enteredEmail.trim().toLowerCase() === storedEmail?.toLowerCase()) {
      sendVerificationRequest(enteredEmail);
    } else {
      setError("Emailul introdus nu se potrivește cu cel înregistrat.");
    }
  };

  return (
    <div>
      <Header />
      <div className="register reset-pass confirm-email">
        <div className="container">
          <div className="box">
            <div className="content">
              <img src={LogoBackground} width={148} alt="Logo" />
              <h1>Confirmă adresa de email</h1>
              <p>
                Te rugăm să confirmi adresa de email <span>{maskedEmail}</span>{" "}
                pentru a-ți trimite un cod de verificare.
              </p>
              <form noValidate onSubmit={handleSubmit}>
                <div className="grid-2">
                  <div className="input-container">
                    <label>Introdu adresa de email:</label>
                    <input
                      type="email"
                      value={enteredEmail}
                      onChange={(e) => setEnteredEmail(e.target.value)}
                      placeholder="exemplu@email.com"
                      required
                    />
                  </div>
                </div>
                {error && <p className="error">{error}</p>}
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

export default ConfirmEmail;
