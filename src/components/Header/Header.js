import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import profilePicture from '../../assets/images/guille.png';
import './Header.css'

function Header() {
    return (
        <Container className="header col-xxl-8 px-4 py-5 d-flex align-items-center">
            <Row className="align-items-center g-5 py-5">
                <Col className="d-flex justify-content-center">
                    <img src={profilePicture}
                        alt="Guillermo Lazo" />
                </Col>
                <Col>
                    <h1 className="display-5 fw-bold lh-1 mb-3">Hi I'm Guillermo Lazo</h1>
                    <p className="lead">A QA Automation Engineer with passion for new technologies and learning new skills.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Button variant="secondary">
                            <a style={{color:'white', textDecoration: 'none'}} href="https://docs.google.com/document/d/12BsKVn-kuVJluAEYHQUd6aMBn6irTGSz7crAXOUEXaw/export?format=pdf" download><FontAwesomeIcon icon={faDownload} /> Resume</a>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
