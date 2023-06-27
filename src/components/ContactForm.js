import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here, you can send the form data to the desired endpoint
    // using fetch, axios, or any other HTTP library
    const formData = {
      name,
      email,
      message,
    };

    // Example using fetch:
    fetch('https://api.example.com/submit-form', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log('Form submitted successfully:', data);
      })
      .catch((error) => {
        // Handle the error
        console.error('Error submitting form:', error);
      });

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="section is-primary">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <h2 className="title is-2 has-text-centered has-text-white">
              Ota yhteyttä
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Nimi</label>
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
                <label className="label">Sähköposti</label>
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
                <label className="label">Viesti</label>
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
                  <button type="submit" className="button is-light">
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
