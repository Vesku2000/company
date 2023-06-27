import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

function Homepage() {
  return (
    <div>
      <Navbar />
      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">
              Tervetuloa Tech Assistiin
            </h1>
            <h2 className="subtitle is-3">
              Teknologiaa ikääntyville ihmisille
            </h2>
            <p className="is-size-5">
              Tarjoamme asiantuntevaa apua ja tukea kaikkiin IT-tarpeisiisi,
              älypuhelimista tietokoneisiin ja paljon muuhun. Ystävällinen
              ammattilaisjoukkomme on omistautunut auttamaan ikääntyviä ihmisiä
              digitaalisen maailman hallinnassa.
            </p>
            <a href="#contact" className="button is-light is-large mt-5">
              Ota yhteyttä
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="phone-icon.png" alt="Puhelin-ikoni" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Puhelinapu</p>
                      <p className="subtitle is-6">Apua älypuhelinten kanssa</p>
                    </div>
                  </div>
                  <div className="content">
                    Asiantuntijamme auttavat sinua älypuhelinten asentamisessa,
                    käytössä, sovellusten asentamisessa, ongelmien vianetsinnässä ja paljon muussa.
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="computer-icon.png" alt="Tietokone-ikoni" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Tietokoneen tuki</p>
                      <p className="subtitle is-6">Apua tietokoneiden kanssa</p>
                    </div>
                  </div>
                  <div className="content">
                    Tarvitsetko apua tietokoneesi kanssa? Taitavat teknikkomme ovat
                    täällä tarjoamassa sinulle asiantuntevaa tukea, oli kyseessä sitten
                    laitteistoon tai ohjelmistoon liittyviä ongelmia, laitteiden asentamista
                    tai suorituskyvyn optimointia.
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="tablet-icon.png" alt="Tabletti-ikoni" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Tablettiapu</p>
                      <p className="subtitle is-6">Apua tablettien kanssa</p>
                    </div>
                  </div>
                  <div className="content">
                    Tabletit voivat olla erinomainen työkalu ikääntyville ihmisille. Tiimimme
                    voi opastaa sinua käyttämään tablettia tehokkaasti, oli kyseessä sitten
                    sähköposti, selailu, videopuhelut tai viihdesovellukset.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="title is-2">Miksi valita Tech Assist?</h2>
              <ul>
                <li>Kokenut ja ystävällinen henkilökunta</li>
                <li>Räätälöidyt ratkaisut erityistarpeisiin</li>
                <li>Nopea ja luotettava asiakaspalvelu</li>
                <li>Kilpailukykyiset hinnat</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

export default Homepage;
