import React from 'react';
import './Contact.css';
import  { FaLinkedin, FaMobileAlt, FaWhatsapp} from 'react-icons/fa';
import  { MdMail} from 'react-icons/md';

export default function Contact() {
    return (
        <div className="contactContainer">
            <h2 className="contactHeader">Get in touch!</h2> 
            <a className="contactItems" href="mailto:daniel.arango@gmx.com" subject="Hi Dan"><MdMail />daniel.arango@gmx.com</a>
            
            <p className="contactItems"><FaMobileAlt /><FaWhatsapp /> <br/>07590041510</p>
            <p className="contactItems"></p>
            <a className="contactItems" href="https://www.linkedin.com/in/daniel-arango-68503427/" target="blank"><FaLinkedin />LinkedIn</a>

            <h3 className="contactAlternative">...or fill in the form below and I will be in touch</h3>

            <form className="formContainer" action="mailto:daniel.arango@gmx.com" method="post" enctype="text/plain">
                <div className="formContainerItem">
                    <label className="formLabel">Your name:</label>
                    <input className="formInput" type="text" name="name" placeholder="John Appleseed" required />
                </div>

                <div className="formContainerItem">
                    <label className="formLabel">Your email:</label>
                    <input className="formInput" type="email" name="email" placeholder="john.appleseed@email.com" required />
                </div>
            
                <div className="formContainerItem">
                    <label className="formLabel ">Message:</label>
                    <textarea className="formInput message" name="Message" rows="20" cols="80" placeholder="Type your message here"></textarea>
                </div>

                <div>
                    <input className="submitButton" type="submit" name="" />
                </div>
            </form>

        </div>
    )
}
