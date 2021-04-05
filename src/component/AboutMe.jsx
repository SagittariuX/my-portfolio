import React from "react";
import { Container } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";

import styles from "./css/aboutme.module.css";

import profilePic from "../assets/pics/profile.jpg";

import DevIcon from 'devicon-react-svg';


const MyTypingEffect = ({ words }) => {
  return (
    <ReactTypingEffect
      text={words}
      speed={100}
      eraseSpeed={100}
      eraseDelay={1000}
      typingDelay={1000}
      cursorRenderer={(cursor) => (
        <h1 className={styles["my-typing"]}>{cursor}</h1>
      )}
      displayTextRenderer={(text, i) => {
        return (
          <h1 className={styles["my-typing"]}>
            and I{" "}
            {text.split("").map((char, i) => {
              return <span key={i}>{char}</span>;
            })}
          </h1>
        );
      }}
    />
  );
};

const AboutMe = () => {
  const wordList = ["build tools.", "create solutions.", "love to learn."];

  return (
    <>
      <Container fluid id={styles["my-main-header"]}>
        <h1 className={styles["my-typing"]}>Hello I'm Aaron</h1>
        <MyTypingEffect words={wordList} />
        <p>
          I'm a software developer eager to demonstrate my talent and help build
          the next 'Big Thing.'
        </p>
      </Container>
      <Container fluid id='about-me' className={styles["about-me"]}>
        <div className={styles["my-profile-pic-frame"]}>
          <img
            alt="Aaron's profile pic"
            src={profilePic}
            className={styles["my-profile-pic"]}
          />
        </div>
        <div>
          <p>Hello! Welcome to my little corner of the internet.</p>
          <p>
            I have a deep passion toward learning about technology, creating my
            own innovations and solving real-world problems. My main goal is to
            create meaningful, useful and intuitive tools that can help make all
            of our lives more efficient.
          </p>
          <p>
            I have had various experiences developing both for backend and
            frontend technologies. Here's a list of my most used programming
            languages and tools:
          </p>
        </div>
      </Container>
      <Container fluid className={styles['languages-tools-bar']}>
          <DevIcon icon='react' className={styles['dev-icons']} viewBox='0 0 32 32'/>
          <DevIcon icon='javascript' className={styles['dev-icons']} viewBox='0 0 32 32'/>
          <DevIcon icon='java' className={styles['dev-icons']} viewBox='0 0 32 32'/>
          <DevIcon icon='python' className={styles['dev-icons']} viewBox='0 0 32 32'/>
          <DevIcon icon='php' className={styles['dev-icons']} viewBox='0 0 32 32'/>
          <DevIcon icon='docker' className={styles['dev-icons']} viewBox='0 0 32 32'/>
          <DevIcon icon='git' className={styles['dev-icons']} viewBox='0 0 32 32'/>
      </Container>
    </>
  );
};

export default AboutMe;
