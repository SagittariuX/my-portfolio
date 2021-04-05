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
      <h2>{title}</h2>
      <div>
        <img
          className={styles["my-project-img"]}
          alt={title}
          src={process.env.PUBLIC_URL + pic}
          onClick={() => setModal(true)}
        />
      </div>

      <Modal centered contentClassName={styles['my-modal']} show={showModal} onHide={() => setModal(false)} size="xl">
        <Modal.Header closeButton className={styles["my-modal-header"]}>
          {title}
        </Modal.Header>
        <Modal.Body>
          <Container fluid className={styles["my-modal-container"]}>
            <div>
              <img
                className={styles["my-modal-img"]}
                alt={title}
                src={process.env.PUBLIC_URL + pic}
              />
            </div>
            <div>{description}</div>
          </Container>
        </Modal.Body>
        <Modal.Footer className={styles['my-modal-footer']}>Footer</Modal.Footer>
      </Modal>
    </>
  );
};

const Projects = () => {
  const project0 = ProjectJson.items[0];
  const project1 = ProjectJson.items[1];
  const project2 = ProjectJson.items[2];
  const project3 = ProjectJson.items[3];

  return (
    <>
    <Container fluid id='projects' className={styles["my-project-container"]}>
    <h1>Some Of My Projects</h1>
      <Row className={styles["my-project-wrapper"]}>
        <Col className={styles["my-project-innerwrapper"]}>
          <ProjectCard json={project0} />
        </Col>
        <Col className={styles["my-project-innerwrapper"]}>
          <ProjectCard json={project1} />
        </Col>
      </Row>
      <Row className={styles["my-project-wrapper"]}>
        <Col className={styles["my-project-innerwrapper"]}>
          <ProjectCard json={project2} />
        </Col>
        <Col className={styles["my-project-innerwrapper"]}><ProjectCard json={project3} /></Col>
      </Row>
    </Container>
    </>
  );
};

export default Projects;
