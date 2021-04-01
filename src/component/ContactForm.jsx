import React from "react";

import { Container, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

import styles from "./css/contactform.module.css";

const userId = process.env.REACT_APP_EMAIL_USER_ID;
const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending...");
    emailjs
      .sendForm(serviceId, templateId, e.target, userId)
      .then((res) => {
        console.log(res.text);
      })
      .catch((err) => console.log(err.text));
  };

  return (
    <Container>
      <Form className={styles["my-form"]} onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          id="name"
          name='name'
          placeholder="Your name / Contact info"
        />
        <Form.Control
          as="textarea"
          id="message"
          name='message'
          rows={5}
          placeholder="Your message..."
        />
        <Button type="submit">Send</Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
