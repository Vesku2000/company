import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    fetch('http://localhost:3000/submit-form', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted successfully:', data);
        // Clear the form fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <section id="contact" className="section has-background-primary-light pb-4">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <h2 className="title is-2 has-text-centered has-text-black">
              Ota yhteyttä
            </h2>
            <form onSubmit={handleSubmit} className="has-shadow">
              <div className="field">
                <label className="label has-text-black">Nimi</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Nimesi"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-black">Sähköposti</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="Sähköpostiosoitteesi"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-black">Viesti</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Viestisi"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-primary-light">
                    Lähetä
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
