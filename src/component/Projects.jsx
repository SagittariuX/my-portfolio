import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import styles from "./css/projects.module.css";

import ProjectJson from "../assets/jsons/projects.json";

//NOTE: all project images are stored in /public/projects
const ProjectCard = ({
  json: { title, description, pic, languages, links },
}) => {
  const [showModal, setModal] = useState(false);

  return (
    <>
      <h1>{title}</h1>
      <div>
        <img
          className={styles["my-project-img"]}
          alt="project img"
          src={process.env.PUBLIC_URL + pic}
          onClick={() => setModal(true)}
        />
      </div>

      <Modal centered show={showModal} onHide={() => setModal(false)} size="xl">
        <Modal.Header closeButton className={styles["my-modal-header"]}>
          {title}
        </Modal.Header>
        <Modal.Body>
          <Container fluid className={styles["my-modal-container"]}>
            <div>
              <img
                className={styles["my-modal-img"]}
                alt="project img"
                src={process.env.PUBLIC_URL + pic}
              />
            </div>
            <div>{description}</div>
          </Container>
        </Modal.Body>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>
    </>
  );
};

const Projects = () => {
  const project0 = ProjectJson.items[0];
  const project1 = ProjectJson.items[1];
  const project2 = ProjectJson.items[2];

  return (
    <Container fluid className={styles["my-project-container"]}>
      <Row className={styles["my-project-wrapper"]}>
        <Col className={styles["my-project-innerwrapper"]}>
          <ProjectCard json={project0} />
        </Col>
        <Col className={styles["my-project-innerwrapper"]}>
          <ProjectCard json={project1} />
        </Col>
      </Row>
      <Row className={styles["my-project-wrapper"]}>
        <Col className={styles["my-project-innerwrapper"]}><ProjectCard json={project2} /></Col>
        <Col className={styles["my-project-innerwrapper"]}>Col2</Col>
      </Row>
    </Container>
  );
};

export default Projects;
