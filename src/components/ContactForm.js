import React from 'react';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';

const SERVICE_ID = "service_9glw5nt";
const TEMPLATE_ID = "template_y1eicm6";
const USER_ID = "QI17P74nLvCH9VLcp";

const ContactForm = () => {
    const handleOnSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire({
              icon: "success",
              title: "Message Sent Successfully",
            });
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "error",
              title: "Ooops, something went wrong",
              text: error.text,
            });
          }
        );
      e.target.reset();
    };


  return (
    <section id="contact" className="section has-background-primary-light pb-4">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <h2 className="title is-2 has-text-centered has-text-black">
              Ota yhteyttä
            </h2>
            <form onSubmit={handleOnSubmit} className="has-shadow">
              <div className="field">
                <label className="label has-text-black">Nimi</label>
                <div className="control">
                  <input
                  fluid
                    className="input"
                    type="text"
                    placeholder="Nimesi"
                    name="from_name"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-black">Sähköposti</label>
                <div className="control">
                  <input
                    className="input"
                    name="from_email"
                    required
                    type="email"
                    placeholder="Sähköpostiosoitteesi"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-black">Viesti</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Viestisi"
                    name="message"
                    required
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
  };

export default ContactForm;
