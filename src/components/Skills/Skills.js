import React from "react";
import { Container } from "react-bootstrap";
import imageHtml from '../../assets/images/skills/html.svg'
import imageCss from '../../assets/images/skills/css.svg'
import imageJs from '../../assets/images/skills/javascript.svg'
import imageJquery from '../../assets/images/skills/jquery.svg'
import imageReact from '../../assets/images/skills/react.svg'
import imageApi from '../../assets/images/skills/api.svg'
import imageGit from '../../assets/images/skills/git.svg'
import imageJava from '../../assets/images/skills/java.svg'
import imageTestcafe from '../../assets/images/skills/testcafe.svg'
import imageSelenium from '../../assets/images/skills/selenium.svg'
import imageWebdriverio from '../../assets/images/skills/webdriverio.svg'
import imageCypress from '../../assets/images/skills/cypress.svg'
import imageAppium from '../../assets/images/skills/appium.svg'
import Skill from "./Skill";

function Skills() {
    const skills = [
        { name: 'html', path: `${imageHtml}` },
        { name: 'css', path: `${imageCss}` },
        { name: 'javascript', path: `${imageJs}` },
        { name: 'jquery', path: `${imageJquery}` },
        { name: 'react', path: `${imageReact}` },
        { name: 'rest api', path: `${imageApi}` },
        { name: 'git', path: `${imageGit}` },
        { name: 'java', path: `${imageJava}` },
        { name: 'test cafe', path: `${imageTestcafe}` },
        { name: 'selenium webdriver', path: `${imageSelenium}` },
        { name: 'webdriverio', path: `${imageWebdriverio}` },
        { name: 'cypress', path: `${imageCypress}` },
        { name: 'appium', path: `${imageAppium}` },
    ];

    return (
        <Container className="p-5 mb-4 rounded-3 d-flex row"
            id="skills">
            <div className="section-header p-4">
                <h2 className="fw-bold">Skills</h2>
            </div>
            <div className="section-content grid-section bg-white d-flex justify-content-center p-4">
                <ul className="row grid align-items-center">
                        <Skill skills={skills} />
                </ul>
            </div>
        </Container>

    );
};

export default Skills;