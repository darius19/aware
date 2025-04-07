import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogoBackground from "../images/logo-background.png";
import RegisterLoginImage from "../images/register-login-image.png";
import useLoginLogic from "../components/LoginForm";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const { formData, handleChange, handleSubmit, error } = useLoginLogic();

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      navigate("/"); // Redirecționează utilizatorul dacă e logat
    }
  }, []);

  useEffect(() => {
    localStorage.removeItem("unverifiedEmail");
    localStorage.removeItem("verificationType");
    localStorage.removeItem("emailConfirmed");
  }, []);

  const handleGoogleLogin = (credentialResponse) => {
    const token = credentialResponse.credential;
    console.log("✅ Token Google primit:", token);

    fetch("https://awaretherapycenter.ro/accounts/google-login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        console.log("✅ Login Google reușit:", data);
        navigate("/");
      })
      .catch((err) => {
        console.error("❌ Eroare login Google:", err);
      });
  };

  return (
    <div>
      <Header />
      <div className="register login">
        <div className="container">
          <div className="box">
            <div className="image">
              <img src={RegisterLoginImage} alt="Login" />
            </div>
            <div className="content">
              <img src={LogoBackground} width={148} alt="Logo" />
              <h1>Bine ai revenit!</h1>
              <p>Introdu adresa de e-mail și parola pentru a accesa contul</p>

              <form onSubmit={handleSubmit}>
                <div className="grid-2 login">
                  <div className="input-container">
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-container">
                    <label>Parola:</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {error && <p className="error">{error}</p>}

                <div className="forgot-button">
                  <a className="forgot-pas-button" href="/reset-password">
                    Ai uitat parola?
                  </a>
                </div>

                <div className="submit-button">
                  <button type="submit" className="button primary">
                    Loghează-te
                  </button>
                </div>
              </form>

              <div className="social-login">
                <p style={{ textAlign: "center", margin: "1rem 0" }}>sau</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <GoogleLogin
                    onSuccess={handleGoogleLogin}
                    onError={() =>
                      console.log("❌ Eroare la autentificarea cu Google")
                    }
                    type="standard"
                    theme="outline"
                    size="large"
                    text="signin_with"
                    shape="rectangular"
                    logo_alignment="left"
                  />
                </div>
              </div>

              <div className="redirect-page">
                Nu ai un cont? <a href="/register">Înregistrează-te aici!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
