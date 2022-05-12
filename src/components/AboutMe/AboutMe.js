import React from "react";
import { Container } from "react-bootstrap";

function AboutMe() {
    const aboutMe = `I am a QA Test Engineer located in Mexico City with experince in
    different testing tools as
    Selenium IDE, Webdriver, WebdriverIO, TestCafe, Cypress, Mocha, Chai, Postman, Jmeter and
    Java/Java Script as programing lenguages. Always trying to be up to date with the last
    testing
    trendings. Fan of soccer, MMA and Video Games.

    Interested in increasing my coding skills and decided to take a Fullstack path just as hobby
    and
    maybe one day make the transition.`;

    return (
        <Container className="p-5 mb-4 rounded-3 d-flex row"
            id="about-me">
            <div className="section-header p-4">
                <h2 className="fw-bold">About Me</h2>
            </div>
            <Container
                className="container fs-5 fst-normal section-content bg-white d-flex justify-content-center p-4 rounded">
                <p className="align-items-center">{aboutMe}</p>
            </Container>
        </Container>
    );
};

export default AboutMe;