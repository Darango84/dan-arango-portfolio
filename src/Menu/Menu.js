import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="fixedMenu">
            <ul className="menu">
                <Link to='./' className="menuHeader"><li>DA</li></Link>
                <Link to='./Contact' className="menuItem"><li>Contact</li></Link>
                <li className="menuItem">Projects</li>
                <li className="menuItem">About</li>   
          </ul>
        </div>
    )
}
