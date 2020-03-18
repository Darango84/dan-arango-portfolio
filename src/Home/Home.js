import React from 'react';
import Danphoto from '../Danphoto.png';
import './Home.css';


export default function Home() {
    return (
        <div>
        <div className="homeContainer">
            <h1 className="homeHeader">Hi, I'm Dan. <br/>I design and build web applications and user interfaces</h1>
            <img className="danPhoto" src={Danphoto} alt="Dan Arango at work"></img>
        </div>

        <div>
            <p className="aboutMe">Daniel is a senior digital consultant with strong Agile Project Management, 
                application/website design and development, data mining/analysis and stakeholder management skills. 
                He has a broad understanding of the banking industry and strong interpersonal skills, 
                having worked for leading global banks in Retail Banking, IT and Operations for the 
                last 10 years.</p>
        </div>
        </div>
    );
}