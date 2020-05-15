import React from "react";
import Header from './Header.js';
import Card from './Card.js';
import Avatar from './Avatar.js';
import FancyHeader from './FancyHeader';
import ProjectView from './ProjectView';
import './App.scss';

// Images
import CG from './images/CG.jpeg';

export default function App() {
    return (
        <div className="App">
          <Header/>
          <div id="content">
            <div id="title-container">
              <Card color="primary" id="title-card">
                <h1>Øyvind Monsen</h1>
                <h4 id="tagline">CS student | Fullstack dev | Tech enthusiast</h4>
              </Card>
              <Card color="secondary" id="about-card">
                <div id="about-text">
                  <h2>About me</h2>
                  <p>
                    I’m 20 years old who’s been programming since 15.
                    Currently I’m sutdying computer science at NTNU in Trondheim as well as working part time at Biblioteksystemer AS.
                    I usually do web development, both frontend and backend, but have also been doing mobile, games and even
                    scanner firmware.
                  </p>
                </div>
                <Avatar id="about-avatar"/>
              </Card>
            </div>
          </div>

          <FancyHeader text="Some cool projects"/>

          <div id="projects">
            <ProjectView title="ChairGame" image={CG} description="A fun little game I made in the progress of learning programming. Musical chairs for your phone is the app you didn't know you didn't need, yet it is available on the App Store!"/>
          </div>
        </div>
    );
}
