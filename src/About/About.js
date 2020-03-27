import React from 'react';
import './About.css';


export default function About() {
    return (
        <div className="aboutPage">
            <div className="aboutTitle">
                <h1>Dan Arango</h1>
            </div>
            <div>
                 <p className="aboutMeOne">I am a Senior Digital Consultant with strong Agile/Scrum Project Management
                        and stakeholder management skills, data mining, reporting and analysis, application/website design and development. 
                        I have a broad understanding of the banking industry and strong interpersonal skills, 
                        having worked for leading global banks in Retail Banking, IT and Risk Management for the 
                        last 10 years.</p>
            </div>
            <div className="technologies">
                <ul className="techItems">Javascript</ul>
                <ul>React</ul>
                <ul>HTML5</ul>
                <ul>CSS3</ul>
                <ul>MongoDB</ul>
                <ul>SQL</ul>
            </div>
        </div>
    )
}
