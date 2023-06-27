import React from 'react';

function ContactForm() {
  return (
    <section id="contact" className="section is-primary">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <h2 className="title is-2 has-text-centered has-text-white">
              Ota yhteyttä
            </h2>
            <div className="field">
              <label className="label">Nimi</label>
              <div className="control">
                <input className="input" type="text" placeholder="Nimesi" />
              </div>
            </div>
            <div className="field">
              <label className="label">Sähköposti</label>
              <div className="control">
                <input className="input" type="email" placeholder="Sähköpostiosoitteesi" />
              </div>
            </div>
            <div className="field">
              <label className="label">Viesti</label>
              <div className="control">
                <textarea className="textarea" placeholder="Viestisi"></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-light">Lähetä</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
