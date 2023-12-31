import React from 'react';
import ContactForm from '../components/ContactForm';
import { Form } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <section id="company-contact" className="section has-background-primary-light">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <h2 className="title is-2 has-text-centered">Yhteystiedot</h2>
              <p className="subtitle has-text-centered">Easy Help</p>
              <p className="has-text-centered">Turku</p>
              <p className="has-text-centered">0449717620</p>
              <p className="has-text-centered">valtterisyrjanen@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section has-background-primary-light">
        <div className="container ">
          <div className="columns is-centered">
            <div className="column is-half">
              <h2 className="title is-4 has-text-centered">Ota yhteyttä</h2>
              <p className="has-text-centered">
                Voit ottaa meihin yhteyttä täyttämällä alla olevan lomakkeen tai käyttämällä yllä näkyviä yhteystietoja.
                Vastaamme mielellämme kaikkiin kysymyksiisi ja palautteisiisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default Contact;
