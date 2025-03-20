import React from "react";
import "../css/main.css";
import "../css/responsive.css";
import messenger from "../images/MessengerLogo.png";
import instagram from "../images/InstagramLogo.png";
import x from "../images/XLogo.png";
import telegram from "../images/TelegramLogo.png";
import paperplane from "../images/PaperPlaneTilt.png";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="logo">
              <Logo />
            </div>
            <div className="socials">
              <div className="social phone-number">
                <label>Follow Us On:</label>
              </div>
              <div className="social messenger">
                <a href="/" className="icon">
                  <img alt="footer-icon" src={messenger} />
                </a>
              </div>
              <div className="social instagram">
                <a href="/" className="icon">
                  <img alt="footer-icon" src={instagram} />
                </a>
              </div>
              <div className="social x">
                <a href="/" className="icon">
                  <img alt="footer-icon" src={x} />
                </a>
              </div>

              <div className="social telegram">
                <a href="/" className="icon">
                  <img alt="footer-icon" src={telegram} />
                </a>
              </div>
            </div>
          </div>
          <div className="main-footer">
            <div className="grid-4">
              <div className="column">
                <h3>Aware</h3>
                <a href="/">Evenimente</a>
                <a href="/">Despre noi</a>
                <a href="/">Servicii</a>
                <a href="/">Contact</a>
                <a href="/">Echipa noastra</a>
              </div>
              <div className="column">
                <h3>Serviciile noastre</h3>
                <a href="/">Terapie Individuală</a>
                <a href="/">Terapie de Cuplu & Relații</a>
                <a href="/">Terapie de Familie & Parenting</a>
                <a href="/">Terapie pentru Anxietate și Depresie</a>
                <a href="/">Child & Adolescent Therapy</a>
              </div>
              <div className="column">
                <h3>Terapeuții Noștri</h3>
                <a href="/">Annette Black</a>
                <a href="/">Jane Cooper</a>
                <a href="/">Brooklyn Simmons</a>
                <a href="/">Kathryn Murphy</a>
                <a href="/">Cameron Williamson</a>
              </div>
              <div className="column">
                <h3>Abonează-te la Newsletter</h3>
                <div className="newsletter-footer">
                  <div className="input-container">
                    <input type="email" placeholder="Email" />
                    <div class="submit-button">
                      <input
                        type="submit"
                        className="button primary"
                        value=""
                      />
                      <img alt="footer-icon" src={paperplane} />
                    </div>
                  </div>
                </div>
                <p>
                  Te rugăm să te abonezi pentru a urmări cele mai recente
                  evenimente de la noi, promitem că nu îți vom trimite spam.
                </p>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>Copyright © 2025 Aware. Toate drepturile rezervate.</p>
            <div className="links">
              <a href="/">Termeni și Condiții</a>
              <a href="/">Politica de confidentialitate</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
