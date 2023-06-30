import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

const AboutCompanypage = () => {
  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-two-fifths">
              <div className="card">
                <div className="card-content">
                  <h1 className="title is-1">Tietoa Yrityksestä</h1>
                  <p className="is-size-5">
                    Olen 23-vuotias IT-opiskelija, joka perusti tämän yrityksen vuonna 2023. Tämä on ensimmäinen yritykseni, ja tavoitteenani on laajentua tulevaisuudessa.
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-two-fifths">
              <div className="card">
                <div className="card-content">
                  <p className="is-size-5">
                    Yritykseni tarjoaa ammattimaista ja laadukasta palvelua. Olen intohimoinen teknologian käyttäjä ja haluan auttaa muita hyödyntämään sitä heidän arjessaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="card personal-card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-128x128">
                        <img src="your-image-url.png" alt="Your Name" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="columns is-vcentered">
                        <div className="column">
                          <p className="title is-4">Your Name</p>
                          <p className="subtitle is-6">Your Country</p>
                          <p className="subtitle is-6">Your Age</p>
                        </div>
                        <div className="column">
                          <ul className="trophy-list">
                            <li>
                              <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
                              Finnish Master
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
                              Fake Trophy 1
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
                              Fake Trophy 2
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompanypage;
