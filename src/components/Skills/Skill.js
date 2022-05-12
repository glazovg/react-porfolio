import React from "react";

function Skill({ skills }) {
    return (
        <>
        {
            skills.map((skill) => (
                <li className="d-flex justify-content-center col" key={skill.name}>
                    <div>
                        <img src={skill.path} />
                        <p>{skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}</p>
                    </div>
                </li>
            ))
        }
        </>
    );
};

export default Skill;