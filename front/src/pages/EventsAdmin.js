import React from "react";
import "../css/main.css";
import AddEvent from "../components/NewEvent";
import LogoBackground from "../images/logo-background.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventImage from "../images/event.png";

const EventsAdmin = () => {
  return (
    <div>
      <Header />
      <div className="events">
        <div className="about-aware">
          <AddEvent />
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
              Oamenii sunt esența noastră, iar rolul nostru este să fim alături
              de tine, cu blândețe și profesionalism.
            </p>
          </div>
        </div>
        <div className="events-container active">
          <div className="event">
            <div className="image">
              <img src={EventImage} />
            </div>
            <div className="content-wrapper">
              <div className="content">
                <div className="item">
                  <label>Numele evenimentului</label>
                  <div className="value">MindLab🧠✨</div>
                </div>
                <div className="item">
                  <label>Data</label>
                  <div className="value">12 Feb</div>
                </div>
                <div className="item">
                  <label>Ora</label>
                  <div className="value">12:30</div>
                </div>
                <div className="item">
                  <label>Descriere</label>
                  <div className="value">Un workshop interactiv despre...</div>
                </div>
                <div className="submit-button">
                  <i class="fa-solid fa-calendar-days"></i>
                  <p>Rezerva</p>
                </div>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="image">
              <img src={EventImage} />
            </div>
            <div className="content-wrapper">
              <div className="content">
                <div className="item">
                  <label>Numele evenimentului</label>
                  <div className="value">MindLab🧠✨</div>
                </div>
                <div className="item">
                  <label>Data</label>
                  <div className="value">12 Feb</div>
                </div>
                <div className="item">
                  <label>Ora</label>
                  <div className="value">12:30</div>
                </div>
                <div className="item">
                  <label>Descriere</label>
                  <div className="value">Un workshop interactiv despre...</div>
                </div>
                <div className="submit-button">
                  <i class="fa-solid fa-calendar-days"></i>
                  <p>Rezerva</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="events-container inactive">
          <h2>Evenimente trecute</h2>
          <div className="event">
            <div className="image">
              <img src={EventImage} />
            </div>
            <div className="content-wrapper">
              <div className="content">
                <div className="item">
                  <label>Numele evenimentului</label>
                  <div className="value">MindLab🧠✨</div>
                </div>
                <div className="item">
                  <label>Data</label>
                  <div className="value">12 Feb</div>
                </div>
                <div className="item">
                  <label>Ora</label>
                  <div className="value">12:30</div>
                </div>
                <div className="item">
                  <label>Descriere</label>
                  <div className="value">Un workshop interactiv despre...</div>
                </div>
                <div className="submit-button">
                  <i class="fa-solid fa-calendar-days"></i>
                  <p>Rezerva</p>
                </div>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="image">
              <img src={EventImage} />
            </div>
            <div className="content-wrapper">
              <div className="content">
                <div className="item">
                  <label>Numele evenimentului</label>
                  <div className="value">MindLab🧠✨</div>
                </div>
                <div className="item">
                  <label>Data</label>
                  <div className="value">12 Feb</div>
                </div>
                <div className="item">
                  <label>Ora</label>
                  <div className="value">12:30</div>
                </div>
                <div className="item">
                  <label>Descriere</label>
                  <div className="value">Un workshop interactiv despre...</div>
                </div>
                <div className="submit-button">
                  <i class="fa-solid fa-calendar-days"></i>
                  <p>Rezerva</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default EventsAdmin;
