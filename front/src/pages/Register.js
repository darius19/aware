import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogoBackground from "../images/logo-background.png";
import RegisterLoginImage from "../images/register-login-image.png";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token"); // Mutat în interior
    if (token) {
      navigate("/"); // Redirecționează utilizatorul dacă e logat
    }
  }, []); // Dependințe corecte
  return (
    <div>
      <Header />
      <div className="register">
        <div className="container">
          <div className="box">
            <div className="image">
              <img src={RegisterLoginImage} alt="Imagine înregistrare" />
            </div>
            <div className="content">
              <img src={LogoBackground} width={148} alt="Imagine Logo" />
              <h1>Creează-ți un cont!</h1>
              <p>Completează câmpurile de mai jos pentru a-ți crea un cont</p>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
