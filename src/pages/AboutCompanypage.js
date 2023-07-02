import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

const AboutCompanypage = () => {
  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-four-fifths">
              <div className="card">
                <div className="card-content">
                  <h1 className="title is-1">Tietoa Yrityksestä</h1>
                  <p className="is-size-5">
                    Olen 23-vuotias IT-opiskelija, joka perusti tämän yrityksen vuonna 2023. Tämä on ensimmäinen yritykseni, ja tavoitteenani on laajentua tulevaisuudessa. Yritykseni tarjoaa ammattimaista ja laadukasta palvelua. Olen intohimoinen teknologian käyttäjä ja haluan auttaa muita hyödyntämään sitä heidän arjessaan. Ymmärrän, että teknologia voi olla haastavaa monille, erityisesti iäkkäämmille ihmisille. Siksi haluan tarjota ystävällistä ja kärsivällistä tukea heille, jotta he voivat hyödyntää teknologian tarjoamia mahdollisuuksia. Tavoitteeni on luoda pitkäaikaisia asiakassuhteita ja saavuttaa maine luotettavana ja asiantuntevana yrityksenä. Haluan kehittyä ja oppia jatkuvasti tarjotakseni parasta mahdollista palvelua asiakkaille. Olen innoissani tästä yrityksestä ja siitä, mitä tulevaisuus tuo tullessaan. Toivon voivani kasvattaa yritystäni ja tarjota entistä laajempia palveluja asiakkaille.
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
                        <img src="your-image-url.png" alt="Valtteri Syrjänen" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="columns is-vcentered">
                        <div className="column">
                          <p className="title is-4">Valtteri Syrjänen</p>
                          <p className="subtitle is-6">Suomi, Turku</p>
                          <p className="subtitle is-6">23</p>
                        </div>
                        <div className="column">
                          <ul className="trophy-list">
                            <li>
                              <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
                              Suomenmestari 2016
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
                              Turun AMK
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
