import React from 'react';
import CSBackground from './components/CSBackground';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Socials from './components/Socials';

const App = () => (
    <div>
        <CSBackground />
        <Header />
        <About />
        <Projects />
        <WorkExperience />
        <Socials />
    </div>
);

export default App;
