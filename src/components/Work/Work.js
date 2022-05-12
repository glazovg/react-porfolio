import React from "react";
import { Container } from "react-bootstrap";
import project1Img from "../../assets/images/wheater_dashboard.png"
import project2Img from "../../assets/images/perfect_meal.png"
import project3Img from "../../assets/images/work_scheduler.png"
import Project from "./Project";

function Work() {

    const projects = [
        {
            name: 'Weather Dashboard',
            technologies: ['JS', 'HTML', 'CSS'],
            descriptions: [
                'This application is going to provide weather information to the user depending on their search.',
                'Searcher is going to give options for autocomplete based only on US cities, but the user is going to be able to search for any city of their preference.',
                'Every time a search is done, if the city is not in the History section, the city is going to be added to History as a button.'
            ],
            liveLink: 'https://glazovg.github.io/weather-dashboard-hw/',
            repoLink: 'https://github.com/glazovg/weather-dashboard-hw',
            imgPath: project1Img
        },
        {
            name: 'Perfect Meal',
            technologies: ['JS', 'Handlebars', 'CSS'],
            descriptions: [
                `The App starts with a login form for Nutritionists to access their patients information, this gives them access to antoher page where they can add or delete Patients, having credentials also gives them access to manage other info, like calculating MACROS for each Patient,
                and generate a calendar for the customer with each meal.`
            ],
            liveLink: 'https://thawing-depths-19417.herokuapp.com',
            repoLink: 'https://github.com/glazovg/perfect_meal',
            imgPath: project2Img
        },
        {
            name: 'Work Day Scheduler',
            technologies: ['JS', 'HTML', 'CSS'],
            descriptions: [
                `Calendar application designed to save today's events, powered by JQuery and Moment.js
                library
                to handle date and time.`
            ],
            liveLink: 'https://glazovg.github.io/work-day-scheduler-hw/',
            repoLink: 'https://github.com/glazovg/work-day-scheduler-hw',
            imgPath: project3Img
        },
    ];

    return (
        <Container className="p-5 mb-4 rounded-3 d-flex row"
            id="work">
            <div className="section-header p-4">
                <h2 className="fw-bold">Work</h2>
            </div>
            <Project projects={projects} />
        </Container>
    );
};

export default Work;