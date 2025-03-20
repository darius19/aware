// src/components/Header.js
import React, { useState } from "react";
import "../css/main.css";
import "../css/responsive.css";
import envelope from "../images/Envelope.png";
import phone from "../images/PhoneCall.png";
import messenger from "../images/MessengerLogo.png";
import Logo from "../components/Logo";
import instagram from "../images/InstagramLogo.png";
import x from "../images/XLogo.png";
import telegram from "../images/TelegramLogo.png";

const Header = () => {
  const toggleMenu = () => {
    const dropdown = document.querySelector(".dropdown");
    if (dropdown) {
      dropdown.classList.toggle("active");
    }
  };
  return (
    <header>
      <div className="top-header">
        <div className="mail">
          <div className="icon">
            <img alt="header-icon" src={envelope} />
          </div>
          <a href="mailto:aware@gmail.com">aware@gmail.com</a>
        </div>
        <div className="socials">
          <div className="social phone-number">
            <a href="/" className="icon">
              <img alt="header-icon" src={phone} />
            </a>
            <label>+40 722 333 444</label>
          </div>
          <div className="social messenger">
            <a href="/" className="icon">
              <img alt="header-icon" src={messenger} />
            </a>
          </div>
          <div className="social instagram">
            <a href="/" className="icon">
              <img alt="header-icon" src={instagram} />
            </a>
          </div>
          <div className="social x">
            <a href="/" className="icon">
              <img alt="header-icon" src={x} />
            </a>
          </div>

          <div className="social telegram">
            <a href="/" className="icon">
              <img alt="header-icon" src={telegram} />
            </a>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="logo">
          <Logo />
        </div>
        <div className="links">
          <div className="burger-menu">
            <i class="fa-solid fa-bars-staggered" onClick={toggleMenu}></i>
            <div className="dropdown">
              <a className="link active" href="/login">
                Acasa
              </a>
              <a className="link" href="/register">
                Despre noi
              </a>
              <a className="link " href="/login">
                Servicii
              </a>
              <a className="link" href="/register">
                Echipa noastra
              </a>
              <a className="link " href="/login">
                Magazin
              </a>
              <a className="link" href="/register">
                Evenimente
              </a>
            </div>
          </div>
          <a className="link active" href="/login">
            Acasa
          </a>
          <a className="link" href="/register">
            Despre noi
          </a>
          <a className="link " href="/login">
            Servicii
          </a>
          <a className="link" href="/register">
            Echipa noastra
          </a>
          <a className="link " href="/login">
            Magazin
          </a>
          <a className="link" href="/register">
            Evenimente
          </a>
        </div>
        <div className="action">
          <a href="/" className="button primary">
            CONTACT
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
