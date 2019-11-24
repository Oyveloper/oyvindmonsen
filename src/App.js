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

		  <ProjectTile title="Chair Game" description="Amazing mobile game for iOS everyone can love; It's musical chairs for your smartphone!" />

	      </div>
	  </div>
	  
      </div>
  );
}




export default App;
