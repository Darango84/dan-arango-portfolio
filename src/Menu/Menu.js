import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import  { FaInfoCircle, FaProjectDiagram } from 'react-icons/fa';
import  { MdContactMail } from 'react-icons/md';


export default function Menu() {
    return (
        <div className="fixedMenu">
            <ul className="menu">
                <Link to='./' className="menuHeader"><li>DA</li></Link>
                <Link to='./Contact' className="menuItem"><li><MdContactMail /></li></Link>
                <Link to='./Projects' className="menuItem"><li><FaProjectDiagram /></li></Link>
                <Link to='./About' className="menuItem"><li><FaInfoCircle /></li></Link>
                
          </ul>
        </div>
    )
}
