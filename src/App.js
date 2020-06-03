import React from "react";
import Header from './Header.js';
import Card from './Card.js';
import Avatar from './Avatar.js';
import FancyHeader from './FancyHeader';
import ProjectView from './ProjectView';
import './App.scss';

// Images
import CG from './images/CG.jpeg';
import workout from './images/workout.png'

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
                Currently I’m sutdying computer science at NTNU in Trondheim as well as working part time as a web developer at Biblioteksystemer AS.
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
        <ProjectView
          title="Workout Tracker"
          facts={[
            "User authentication",
            "MySQL database",
            "Docker",
            <a href='https://github.com/Oyveloper/Workout_tracker_frontend'>Frontend</a>,
            <a href='https://github.com/Oyveloper/WorkoutTracker_Backend'>Backend</a>,
            <p>Chekc it out <a href="workout.oyvindmonsen.no">here.</a></p>,
          ]}
          language="Java and React"
          link="http://workout.oyvindmonsen.no"
          image={workout}
          description="A simple web app that lets you track how you progress in a given exercise. For example how many pushups you can do, or how fast you run a mile. I wrote it to learn the Spring framework in Java, and also to have a more or less complete project to show off"
        />
        
        <ProjectView
          title="ChairGame"
          facts={[
            <p>Published on the <a href="https://apps.apple.com/us/app/chair-game-musical-chairs/id1210198384">App Store</a></p>,
            "Ad revenue"
          ]}
          language="Swift"
          link="https://apps.apple.com/us/app/chair-game-musical-chairs/id1210198384"
          image={CG}
          description="A fun little game I made in the progress of learning programming. Musical chairs for your phone is the app you didn't know you didn't need, yet it is available on the App Store!"
        />

      </div>
      <h4 style={{textAlign: "center", color: "white"}}>More comming soon...</h4>

      <br/>
    </div>
  );
}
