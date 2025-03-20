import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import LogoBackground from "../images/logo-background.png";
import itemLogo from "../images/item-logo.png";
import workshop from "../images/workshop.png";
import human from "../images/human.png";
import arrowRight from "../images/arrow-long-right.png";
import "../css/main.css";
import facebook from "../images/FacebookLogo.png";
import instagram from "../images/InstagramLogoBlack.png";
import x from "../images/XLogo.png";
import linkedin from "../images/LinkedinLogo.png";
import services from "../images/services.png";
import map from "../images/MapPinBlue.png";
import envelopeBlue from "../images/EnvelopeBlue.png";
import phoneBlue from "../images/PhoneCallBlue.png";
import ContactSelect from "../components/SelectContact";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <Carousel />
      <div className="about-aware">
        <div className="container">
          <img
            className="background-logo"
            src={LogoBackground}
            alt="background logo"
          />
          <div className="info-section text-b">DESPRE AWARE</div>
          <h2 className="text-b">Conștientizare. Echilibru. Sprijin.</h2>
          <p className="text-b">
            Aware este mai mult decât un centru de psihologie. Este un spațiu
            sigur unde fiecare voce este ascultată, fiecare emoție este
            validată, iar fiecare pas spre echilibru este susținut cu grijă.
            Oamenii sunt esența noastră, iar rolul nostru este să fim alături de
            tine, cu blândețe și profesionalism.
          </p>
          <div className="action">
            <a href="/" className="button secondary">
              Descoperă Povestea Noastră
            </a>
          </div>
        </div>
      </div>
      <div className="team-aware">
        <div className="container">
          <div className="info-section text-b">ECHIPA AWARE</div>
          <h2 className="text-b">Cunoaște Echipa Noastră de Terapeuți</h2>
          <p className="text-b">
            O echipă de terapeuți autorizați, dedicată sănătății tale mentale și
            dezvoltării personale.
          </p>
          <div className="grid-4">
            <div className="item">
              <div className="image">
                <img className="item-image" src={human} alt="therapist image" />
                <div className="logo-tag">
                  <img src={itemLogo} />
                </div>
                <div className="social-bar">
                  <a href="/" className="social">
                    <img alt="icon-social" src={facebook} />
                  </a>
                  <a href="/" className="social x">
                    <img alt="icon-social" src={x} />
                  </a>
                  <a href="/" className="social">
                    <img alt="icon-social" src={linkedin} />
                  </a>
                  <a href="/" className="social">
                    <img alt="icon-social" src={instagram} />
                  </a>
                </div>
              </div>
              <h3 className="text-b">Dr. Emily Stevens</h3>
              <p> Lead Therapist</p>
            </div>
            <div className="item">
              <div className="image">
                <img className="item-image" src={human} alt="therapist image" />
                <div className="logo-tag">
                  <img alt="social-icon" src={itemLogo} />
                </div>
                <div className="social-bar">
                  <a href="/" className="social">
                    <img alt="social-icon" src={facebook} />
                  </a>
                  <a href="/" className="social x">
                    <img alt="social-icon" src={x} />
                  </a>
                  <a href="/" className="social">
                    <img alt="social-icon" src={linkedin} />
                  </a>
                  <a href="/" className="social">
                    <img alt="social-icon" src={instagram} />
                  </a>
                </div>
              </div>
              <h3 className="text-b">Dr. Emily Stevens</h3>
              <p> Lead Therapist</p>
            </div>
            <div className="item">
              <div className="image">
                <img className="item-image" src={human} alt="therapist image" />
                <div className="logo-tag">
                  <img alt="social-icon" src={itemLogo} />
                </div>
                <div className="social-bar">
                  <a href="/" className="social">
                    <img alt="social-icon" src={facebook} />
                  </a>
                  <a href="/" className="social x">
                    <img alt="social-icon" src={x} />
                  </a>
                  <a href="/" className="social">
                    <img alt="social-icon" src={linkedin} />
                  </a>
                  <a href="/" className="social">
                    <img alt="social-icon" src={instagram} />
                  </a>
                </div>
              </div>
              <h3 className="text-b">Dr. Emily Stevens</h3>
              <p> Lead Therapist</p>
            </div>
            <div className="item">
              <div className="image">
                <img className="item-image" src={human} alt="therapist image" />
                <div className="logo-tag">
                  <img alt="social-icon" src={itemLogo} />
                </div>
                <div className="social-bar">
                  <a href="/" className="social">
                    <img alt="social-icon" src={facebook} />
                  </a>
                  <a href="/" className="social x">
                    <img alt="social-icon" src={x} />
                  </a>
                  <a href="/" className="social">
                    <img alt="social-icon" src={linkedin} />
                  </a>
                  <a href="/" className="social">
                    <img alt="social-icon" src={instagram} />
                  </a>
                </div>
              </div>
              <h3 className="text-b">Dr. Emily Stevens</h3>
              <p> Lead Therapist</p>
            </div>
          </div>
        </div>
      </div>
      <div className="events-aware">
        <div className="container">
          <div className="info-section text-b">EVENIMENTE AWARE</div>
          <h2 className="text-b">
            Ateliere și sesiuni create pentru bunăstarea ta emoțională.
          </h2>
          <p className="text-b">
            Pași mici spre schimbări mari, într-un mediu sigur și prietenos.
          </p>
          <div className="event-box">
            <div className="image">
              <img alt="social-icon" src={workshop} />
              <div className="date">
                12 <br></br> SEP
              </div>
            </div>
            <div className="content">
              <h3 className="text-b">ECHILIBRUL INTERIOR</h3>
              <p>
                “Un workshop practic care te ajută să gestionezi mai bine
                stresul și emoțiile. Vei învăța tehnici simple pentru a-ți
                menține claritatea mentală și starea de bine în viața de zi cu
                zi.”
              </p>
              <div className="see-more">
                <a href="/">
                  Vezi mai multe evenimente
                  <img alt="social-icon" src={arrowRight} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container">
          <div className="column">
            <div className="image">
              <img alt="social-icon" src={services} />
            </div>
            <h3>
              Indiferent dacă te confrunți cu anxietate, depresie, stres,
              probleme de relaționare sau dorința de dezvoltare personală,
              terapia individuală te poate ajuta să:
            </h3>
            <ul>
              <li>✔ Gestionzi mai bine emoțiile și stresul.</li>
              <li>✔ Dezvolți un mindset sănătos și echilibrat.</li>
              <li>
                ✔ Depășești blocajele și îți îmbunătățești încrederea în tine.
              </li>
              <li>
                ✔ Înveți tehnici eficiente pentru gestionarea dificultăților din
                viața de zi cu zi.
              </li>
            </ul>
          </div>
          <div className="column">
            <div className="services-box">
              <h3>Tipuri De Servicii:</h3>
              <div className="checkbox-container">
                <input type="checkbox" />
                <label>Terapie Individuală</label>
                <div className="input-checked"></div>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" />
                <label>Terapie de Cuplu & Relații</label>
                <div className="input-checked"></div>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" />
                <label>Terapie de Familie & Parenting</label>
                <div className="input-checked"></div>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" />
                <label>Terapie pentru Anxietate și Depresie</label>
                <div className="input-checked"></div>
              </div>
              <div className="see-more">
                <a href="/">
                  Vezi mai multe servicii
                  <img alt="social-icon" src={arrowRight} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-aware">
        <div className="container">
          <div className="contact-box">
            <div className="row">
              <div className="column">
                <div className="info-contact">CONTACT</div>
                <h2 className="text-b">Vino la Evenimentul nostru</h2>
                <p className="text-b">
                  Înscrie-te pentru a rezerva locul la evenimentul nostru
                  specializat, și fii parte din această experiență unică.
                </p>
                <div className="socials">
                  <div className="item">
                    <div className="icon">
                      <img alt="social-icon" src={envelopeBlue} />
                    </div>
                    <label>aware@gmail.com</label>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img alt="social-icon" src={phoneBlue} />
                    </div>
                    <label>1234567890</label>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img alt="social-icon" src={map} />
                    </div>
                    <label>Mamaia 500</label>
                  </div>
                </div>
              </div>
              <div className="column">
                <form action="">
                  <div className="contact-form">
                    <h3>Alege Evenimentul</h3>
                    <div className="input-container">
                      <input type="text" placeholder="Numele complet" />
                    </div>
                    <div className="input-container">
                      <input type="tel" placeholder="Numar de telefon" />
                    </div>
                    <div className="input-container">
                      <ContactSelect />
                    </div>
                    <div className="input-container">
                      <textarea type="tel" rows={4} placeholder="Detalii" />
                    </div>
                    <div className="submit-button">
                      <input
                        type="submit"
                        className="button primary"
                        value="Trimite"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <h2 className="temporary">
              AICI URMEAZA HARTA, DAR NE TREBUIE API SPECIFIC
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
