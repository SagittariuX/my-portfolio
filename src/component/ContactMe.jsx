import React, { useState } from "react";

import { Container, Form, Button, Row } from "react-bootstrap";
import SocialInfo from "./SocialInfo";

import emailjs from "emailjs-com";

import styles from "./css/contactme.module.css";

const userId = process.env.REACT_APP_EMAIL_USER_ID;
const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;

const ContactMe = () => {

  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, e.target, userId)
      .then((res) => {
        e.target.reset();
        setSent(true);
      })
      .catch((err) => console.error(err.text));
  };

  if (sent)
    return (
      <Container fluid id={styles['contact-me-bg']}>
        <h1 style={{color: 'var(--my-primary-text-color-dark)'}}>Thank you for visiting!</h1>
        <h1 style={{color: 'var(--my-primary-text-color-dark)'}}>I'll try to respond to your message ASAP!</h1>
        <SocialInfo />
      </Container>
    );


  return (
    <>
      <Container fluid id={styles['contact-me-bg']}>
        <h1 className='wow fadeInUp' style={{color: 'var(--my-primary-text-color-dark)'}}>Connect with Me</h1>
        <Container id="contact-me" className={`${styles["my-form-container"]} wow fadeInUp`}>
          <Form className={styles["my-form"]} onSubmit={handleSubmit}>
            <Row className={styles["my-form-row"]}>
              <Form.Control
                type="text"
                id="name"
                name="name"
                placeholder="Your name / Contact info"
                required
              />
            </Row>
            <Row className={styles["my-form-row"]}>
              <Form.Control
                as="textarea"
                id="message"
                name="message"
                rows={5}
                placeholder="Your message..."
                required
              />
            </Row>
            <Row className={styles["my-form-row"]}>
              <Button type="submit">Send</Button>
              <Button type="reset">Clear</Button>
            </Row>
          </Form>
          <SocialInfo />
        </Container>
      </Container>
    </>
  );
};

export default ContactMe;
