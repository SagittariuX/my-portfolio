import React, { useState } from "react";
import { Container, Col, Row, Badge } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import styles from "./css/projects.module.css";

import ProjectJson from "../assets/jsons/projects.json";

import FeatherIcon from "feather-icons-react";

//NOTE: all project images are stored in /public/projects
const ProjectCard = ({
  json: { title, description, pic, languages, links },
}) => {
  const [showModal, setModal] = useState(false);

  return (
    <>
      <div
        className={`${styles["my-project-img-wrapper"]} wow fadeInUp`}
        onClick={() => setModal(true)}
      >
        <div className={styles["my-project-img-overlay"]}>
          <span>{title}</span>
        </div>
        <img
          className={styles["my-project-img"]}
          alt={title}
          src={process.env.PUBLIC_URL + pic}
        />
      </div>

      <Modal
        centered
        contentClassName={styles["my-modal"]}
        show={showModal}
        onHide={() => setModal(false)}
        size="xl"
      >
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
        <Modal.Footer className={styles["my-modal-footer"]}>
          {links.map(({ domain, text, href } , i) => {
            return (
              <Badge key={i} pill variant="light">
                <a href={href} rel='noreferrer' target='_blank' className={styles['my-modal-links']}>
                  <FeatherIcon icon={domain} />{' '}
                  {text.toUpperCase()}
                </a>
              </Badge>
            );
          })}
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Projects = () => {

  //Looks weird but I only want to show top 4
  //NOTE: will add a scrollable list of projects once I have more thing built
  //      will be a seperate page.
  const project0 = ProjectJson.items[0];
  const project1 = ProjectJson.items[1];
  const project2 = ProjectJson.items[2];
  const project3 = ProjectJson.items[3];

  return (
    <>
      <Container fluid id={styles["my-project-bg"]}>
        <Container id="projects" className={styles["my-project-container"]}>
          <h1 className='wow fadeInUp'>Some Of My Projects</h1>
          <Row className={styles["my-project-wrapper"]}>
            <Col className={styles["my-project-innerwrapper"]}>
              <ProjectCard key='0' json={project0} />
            </Col>
            <Col className={styles["my-project-innerwrapper"]}>
              <ProjectCard key='1' json={project1} />
            </Col>
          </Row>
          <Row className={styles["my-project-wrapper"]}>
            <Col className={styles["my-project-innerwrapper"]}>
              <ProjectCard key='2' json={project2} />
            </Col>
            <Col className={styles["my-project-innerwrapper"]}>
              <ProjectCard key='3' json={project3} />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Projects;
