import React from 'react';
import Danphoto from '../Danphoto.png';
import './Home.css';
import tinpet from '../Images/tinpet.jpg';
import drumKit from '../Images/drumKit.jpg';
import memory1 from '../Images/memory1.jpg';
import Kodflix1 from '../Images/Kodflix1.jpg';


export default function Home() {
    return (
        <div>
            <div className="homeContainer">
                <div className="homeHeader">
                    <div className="homeHeaderText">
                        <h1>Hi, I'm <span className="redName">Dan</span>. 
                        <br/>I design and build web applications and user interfaces</h1>
                    </div>
                </div>
                
                <img className="danPhoto" src={Danphoto} alt="Dan Arango at work"/>
                
                <div className="aboutMe">
                    <p>I am a Senior Digital Consultant with strong Agile and Scrum Project Management
                        and stakeholder management skills, data mining, reporting and analysis, application/website design and development. 
                        I have a broad understanding of the banking industry and strong interpersonal skills, 
                        having worked for leading global banks in Retail Banking, IT and Risk Management for the 
                        last 10 years.</p>
                </div>    
            </div>

                <div className="projectsContainer">
                    <h1 className='projectHeader'>Projects</h1>

                    <div className='projects'>
                        <img className='image' src={tinpet} alt='tinpet project'></img>
                        <div className='description'>
                            <h3>tinpet</h3>
                            <p>An app for pets looking for love</p>
                        </div>
                    </div>
                    <div className='projects'>
                        <img className='image' src={drumKit} alt='drumkit project'></img>
                        <div className='description'>
                            <h3>drumkit</h3>
                            <p>A drumkit game for browser</p>
                        </div>
                    </div>
                    <div className='projects'>
                        <img className='image' src={memory1} alt='memory project'></img>
                        <div className='description'>
                            <h3>memory</h3>
                            <p>An old school-looking memory game for desktop and mobile</p>
                        </div>
                    </div>
                    <div className='projects'>
                        <img className='image' src={Kodflix1} alt='Kodflix project'></img>
                        <div className='description'>
                            <h3>Kodflix</h3>
                            <p>Watch Kodflix movies & TV shows online</p>
                        </div>
                    </div>
                </div>
          
            
        </div>
    );
}