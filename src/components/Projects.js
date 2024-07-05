import React from 'react';

const projects = [
    {
        title: 'Network Traffic Analysis',
        description: 'A Python tool for capturing and analyzing network traffic using the scapy library. It monitors specified network interfaces, logs details of TCP, UDP, and other IP packets, and helps identify unusual patterns or potential security threats.',
        features: [
            'Captures network traffic on a specified interface.',
            'Analyzes and logs details of TCP, UDP, and other IP packets.',
            'Provides timestamped logs for each captured packet.'
        ],
        repoLink: 'https://github.com/sahsan21/network_traffic_analysis'
    },
    {
        title: 'Vulnerability Scanner',
        description: 'A vulnerability scanner written in Python. It checks for common web vulnerabilities such as SQL Injection and Cross-Site Scripting (XSS), and performs a basic port scan.',
        features: [
            'SQL Injection detection',
            'XSS detection',
            'Port scanning'
        ],
        repoLink: 'https://github.com/sahsan21/vulnerability-scanner'
    },
    {
        title: 'Password Strength Checker',
        description: 'A Python tool to evaluate the strength of passwords. It checks for length, uppercase and lowercase letters, digits, and special characters, providing a strength score and suggestions for improvement.',
        features: [
            'Checks if the password is at least 8 characters long.',
            'Checks for the presence of uppercase letters.',
            'Checks for the presence of lowercase letters.',
            'Checks for the presence of digits.',
            'Checks for the presence of special characters.',
            'Provides feedback and suggestions to improve password strength.'
        ],
        repoLink: 'https://github.com/sahsan21/password_strength_checker'
    },
    {
        title: 'Cant Stop - Board Game',
        description: 'This Java-based game served as our group project for the COMP 2005 course. In collaboration with my four teammates, we collectively developed and created a virtual version of the Can\'t Stop board game.',
        features: [
            'Turn-Based Gameplay',
            'Multiple Players',
            'AI Difficulty Levels',
            'Color Deficiency Feature',
            'Set-Up Menu',
            'Accurate Game Logic',
            'Game End Detection'
        ],
        repoLink: 'https://github.com/sahsan21/cant-stop-board-game'
    }
];

const Projects = () => (
    <section id="projects" className="section-projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
            <article key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                    {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                    ))}
                </ul>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <button style={buttonStyle}>View Repository</button>
                </a>
            </article>
        ))}
    </section>
);

const buttonStyle = {
    backgroundColor: '#7b1fa2',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '1rem',
    marginTop: '0.5rem'
};

export default Projects;
