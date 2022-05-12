import React from "react";
import { Container } from "react-bootstrap";

function Project({ projects }) {
    return (
        <>
            {
                projects.map((project) => (
                    <>
                        <Container className="d-flex section-content column p-4">
                            <div className="image-container">
                                <img src={project.imgPath}
                                    alt={project.name} />
                            </div>
                            <div className="work-description ps-4">
                                <h3>{project.name}</h3>
                                <h4>Technologies Used: {
                                    project.technologies.map((technology) => (<>
                                        <span>  {technology}    </span>
                                    </>
                                    ))}
                                </h4>
                                <ul>
                                    {project.descriptions.map((desc) => (<>
                                        <li>{desc}</li>
                                    </>
                                    ))}
                                </ul>
                                <div className="work-links">
                                    <a href={project.liveLink}
                                        className="live"
                                        target="_blank">Live</a>
                                    <a href={project.repoLink}
                                        className="repo"
                                        target="_blank">Repo</a>
                                </div>
                            </div>
                        </Container>
                    </>
                ))
            }
        </>
    );
};

export default Project;