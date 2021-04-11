import React from "react";

import { Container, Form, Button, Row } from "react-bootstrap";
import SocialInfo from "./SocialInfo";

import emailjs from "emailjs-com";

import styles from "./css/contactme.module.css";

const userId = process.env.REACT_APP_EMAIL_USER_ID;
const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, e.target, userId)
      .then((res) => {
        e.target.reset();
        console.log(`email sent: ${res.text}`);
      })
      .catch((err) => console.log(err.text));
  };

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
