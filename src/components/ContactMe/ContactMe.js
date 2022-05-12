import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function ContactMe() {
    const linkedIn = "https://www.linkedin.com/in/guillermolazovg/";
    const gitHubLink = "https://github.com/glazovg";
    const mailito = "mailto: glazovg@gmail.com";

    return (
        <Container className="p-5 mb-4 rounded-3 d-flex row"
            id="contact-me">
            <Container className="section-header p-4">
                <h2 className="fw-bold">Contact Me</h2>
            </Container>
            <Container className="fs-5 fst-normal section-content bg-white p-4 rounded">
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
            </Container>
        </Container>
    );
};

export default ContactMe;