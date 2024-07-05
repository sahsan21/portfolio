import React from 'react';
import sarwarImage from '../components/Sarwar.jpg'; // Correct the path to the image

const Header = () => (
    <header>
        <h1>Sarwar Ahsan</h1>
        <img src={sarwarImage} alt="Sarwar Ahsan" className="profile-image" />
        <nav>
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#work-experience">Work Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;
