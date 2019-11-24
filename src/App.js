import React from 'react';

import './App.css';
import ProjectTile from './Projecttile';




function App() {
  return (

      <div className="App">
	  <header className="App-header">

	      <div className="avatar">

	      </div>

	      <div className="avatar"></div>
	      <div className="title fade">
		  <h1>Øyvind Monsen</h1>
		  <h2>portfolio website</h2>
	      </div>
	  </header>

	  <div className="projects">
	      <h1 className="fade fade-1">Projects</h1>

	      <div className="project-grid">

		  <ProjectTile title="Chair Game" description="Amazing mobile game for iOS everyone can love; It's musical chairs for your smartphone!" url="https://apps.apple.com/no/app/chair-game-musical-chairs/id1210198384?l=no" />
		  <ProjectTile title="Me Camera" description="Prank camera that takes a photo of the photograph instead of the subject." url="https://apps.apple.com/us/app/mecamera/id1071230400?ls=1"/>

	      </div>
	  </div>


	  <h1 className="fade fade-3">This page is still under construction...</h1>
	  
      </div>

  );
}




export default App;
