import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
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
    <div className="FormTest">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field>
          <label>Email</label>
          <Input
            fluid
            type="email"
            name="user_email"
            placeholder="Email…"
            required
            icon="mail"
            iconPosition="left"
          />
        </Form.Field>
        <Form.Field>
          <label>Name</label>
          <Input
            fluid
            type="text"
            name="user_name"
            placeholder="Name…"
            required
            icon="user circle"
            iconPosition="left"
          />
        </Form.Field>
        <Form.Field>
          <label>Message</label>
          <TextArea
            placeholder="Message…"
            name="user_message"
            required
          />
        </Form.Field>
        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormTest;
