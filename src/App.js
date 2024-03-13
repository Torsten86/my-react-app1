import React from 'react';
import './App.css'; 
import Intro from './Intro';
import Experience from './Experience';
import Education from './Education';
import Github from './Github';

const App = () => {
  return (
    <div className="app-container">
      <div className="left-panel">
        <div className="profile-info">
          <img
            src="https://media.istockphoto.com/id/1045035708/sv/vektor/ankungen-enkla-vektor-ikonen.jpg?s=2048x2048&w=is&k=20&c=L2tKD_KiVhnzQOCeQFjPcH3OsZb1woRMfwMFmK8uXdg="
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>Email: example@random.se</p>
          <p>Phone: 123-456789</p>
        </div>
        {/* Content for the left panel */}
        <h2>Left Panel</h2>
      </div>
      <div className="right-panel">
        <Intro />
        <Experience />
        <Education />
        <Github />
      </div>
    </div>
  );
};

export default App;
