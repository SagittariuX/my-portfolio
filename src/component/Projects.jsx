import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'

import styles from "./css/projects.module.css";


//NOTE: all project images are stored in /public/projects
const ProjectCard = () => {

  const [showModal, setModal] = useState(false);

  return (
    <>
      <h1>Title</h1>
      <div>
        <img className={styles['my-project-img']}
          alt="project img"
          src={process.env.PUBLIC_URL + "/projects/sortme.png"}
          onClick={() => setModal(true)}
        />
      </div>

      <Modal
        centered
        show={showModal}
        onHide={() => setModal(false)}
      >

        <Modal.Body>
          Body
        </Modal.Body>

      </Modal>


    </>
  );
};

const Projects = () => {
  return (
    <Container fluid className={styles["my-project-container"]}>
      <Row className={styles["my-project-wrapper"]}>
        <Col className={styles["my-project-innerwrapper"]}>
          <ProjectCard />
        </Col>
        <Col className={styles["my-project-innerwrapper"]}>Col2</Col>
      </Row>
      <Row className={styles["my-project-wrapper"]}>
        <Col className={styles["my-project-innerwrapper"]}>Col1</Col>
        <Col className={styles["my-project-innerwrapper"]}>Col2</Col>
      </Row>
    </Container>
  );
};

export default Projects;
