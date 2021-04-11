import React from 'react';
import { Container } from 'react-bootstrap';

import styles from './css/intro.module.css';
import IntroSVG from '../assets/pics/Computer.svg';


const Intro = () => {

    return ( 
        <Container fluid className={styles['intro-container']}>
            <img className={styles['svg']} src={`${IntroSVG}?ver=${Date.now()}`} alt='Intro'/>
        </Container>
     );
}
 
export default Intro;