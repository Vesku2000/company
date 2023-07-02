import React from 'react';
import 'bulma/css/bulma.min.css';
import './Pricing.css';
import ContactForm from '../components/ContactForm';

function Pricing() {
  return (
    <div>
      

      <section className="section">
        <div className="container">
          <h2 className="title">Mitä tarjoamme</h2>
          <p>
            Tarjoamme laadukasta IT-tukea ikääntyneille henkilöille. Olipa kyseessä puhelintuki, 
            etäavustus tai sähköpostituki, autamme sinua ratkaisemaan tietokoneeseen, 
            älypuhelimeen tai muuhun laitteeseen liittyvät ongelmat. 
            Tavoitteenamme on tehdä teknologian käyttö helpoksi ja vaivattomaksi kaikille ikäryhmille.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title">Laskutus mallit</h2>
          <h4 className='pb-5'>Tässä erilaisia esimerkkejä hinnastostamme ja palveluista, joita siihen sisältyy</h4>

          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <h2 className="title is-4">Perus</h2>
                  <p className="subtitle is-6">Sopii satunnaiseen avun tarpeeseen</p>
                  <hr />
                  <ul>
                    <li>Puhelintuki</li>
                    <li>pdf-ohjeet</li>
                    <li>Sähköpostituki</li>
                  </ul>
                  <div className="has-text-centered">
                    <a className="button is-primary" href="#">Nyt Vain 100€/kk</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="card-content">
                  <h2 className="title is-4">Sinkku</h2>
                  <p className="subtitle is-6">Yhdellä käynnillä kaikki kuntoon</p>
                  <hr />
                  <ul>
                    <li>Käyntipaikan päällä</li>
                    <li>Hinta etukäteen. Ei yllätyksiä</li>
                    <li>Hommat kuntoon</li>
                    <li></li>
                  </ul>
                  <div className="has-text-centered">
                    <a className="button is-primary" href="#">Kysy tarjousta</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="card-content">
                  <h2 className="title is-4">Premium</h2>
                  <p className="subtitle is-6">Niille, jotka kaipaavat apua useammin</p>
                  <hr />
                  <ul>
                    <li>Puhelintuki</li>
                    <li>Sähköpostituki</li>
                    <li>Käyntejä paikan päällä (max 3krt/kk)</li>
                  </ul>
                  <div className="has-text-centered">
                    <a className="button is-primary" href="#">120€/kk</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

export default Pricing;
