import React from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    const linkedIn = "https://www.linkedin.com/in/guillermolazovg/";
    const gitHubLink = "https://github.com/glazovg";
    const mailito = "mailto: glazovg@gmail.com";

    return (
        <Container className="footer d-block justify-content-center">
            <Row>
                <ul className="container d-flex justify-content-center socialsList">
                    <li className="column ps-5 pe-5">
                        <a href={linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    <li className="column ps-5 pe-5">
                        <a href={gitHubLink}
                            target="_blank"
                            rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                    </li>
                    <li className="column ps-5 pe-5">
                        <a href={mailito}
                            target="_blank"
                            rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
                    </li>
                </ul>
            </Row>
            <Row>
                <p className="container d-flex justify-content-center socialsList">© Guillermo Lazo 2022</p>
            </Row>
        </Container>
    );
};

export default Footer;