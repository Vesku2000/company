import React from 'react';
import ContactForm from '../components/ContactForm';
import ComputerSupportCard from '../components/ComputerSupportCard';
import MobileAssistanceCard from '../components/MobileAssistanceCard';
import TabletAssistanceCard from '../components/TabletAssistanceCard';

function Homepage() {
  return (
    <div>
      <section className="hero has-background-primary-light  is-fullheight">
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
            <a href="#contact" className="button is-primary is-large mt-5">
              Ota yhteyttä
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <MobileAssistanceCard />
            <ComputerSupportCard />
            <TabletAssistanceCard />
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

export default Homepage;
