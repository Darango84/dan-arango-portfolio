import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contactContainer">
        <h2 className="contactHeader">Get in touch!</h2>

        <p className="contactItems">email: <a href="mailto:daniel.arango@gmx.com" subject="Hi Dan">daniel.arango@gmx.com</a></p>
        <p className="contactItems">mobile: <span>0759XXXX510</span></p>
        <a className="contactItems" href="https://www.linkedin.com/in/daniel-arango-68503427/">Contact me on linkedIn</a>

        <h3 className="contactAlternative">...or fill in the form below and I will be in touch asap</h3>

        <form className="formContainer" action="mailto:daniel.arango@gmx.com" method="post" enctype="text/plain">
            <div className="formContainerItem">
            <label className="formLabel">Your name:</label>
            <input className="formInput" type="text" name="name" value="" required />
            </div>

            <div className="formContainerItem">
            <label className="formLabel">Your email:</label>
            <input className="formInput" type="email" name="email" value="" required />
            </div>
           
            <div className="formContainerItem">
            <label className="formLabel">Your Message:</label>
            <textarea name="Message" rows="8" cols="80"></textarea>
            </div>

            <p>I want to receive updates<input type="checkbox" name="" value=""/></p>
            <input type="submit" name="" />
            <input type="reset" name="" value="Reset form" />
        </form>

        </div>
    )
}
