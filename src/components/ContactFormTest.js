import React from "react";
import emailjs from "emailjs-com";
import { Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

const SERVICE_ID = "service_9glw5nt";
const TEMPLATE_ID = "template_y1eicm6";
const USER_ID = "QI17P74nLvCH9VLcp";

const FormTest = () => {
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
                  <Input
                    fluid
                    type="text"
                    name="user_name"
                    placeholder="Nimesi"
                    required
                    icon="user circle"
                    iconPosition="left"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-black">Sähköposti</label>
                <div className="control">
                  <Input
                    fluid
                    type="email"
                    name="user_email"
                    placeholder="Sähköpostiosoitteesi"
                    required
                    icon="mail"
                    iconPosition="left"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-black">Viesti</label>
                <div className="control">
                  <TextArea
                    placeholder="Viestisi"
                    name="user_message"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <Button type="submit" color="green" fluid>
                    Lähetä
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormTest;
