import React from 'react';
import $ from 'jquery';

function parrallaxHover(e) {



	var halfWidth = (this.clientWidth / 2);
	var halfHeight = (this.clientHeight / 2);

	var coorX = (halfWidth - (e.pageX - this.offsetLeft));
	var coorY = (halfHeight - (e.pageY - this.offsetTop));

	var degX = ((coorY / halfHeight) * 8) + 'deg';
	var degY = ((coorX / halfWidth) * -8) + 'deg';

	

	$(this).css('transform', function() {
	    return 'perspective(600px) translate3d(0, -2px, 0) scale(1.05) rotateX(' + degX + ') rotateY(' + degY + ')';
	}).children('.project-tile-content').css('transform', function() {
	    return 'perspective(600px) translate3d(0,0,0) rotateX(' + degX + ') rotateY(' + degY + ')';
	});


	
   
}

function removeParrallax(e) {

    $(this).removeAttr('style')
	   .children()
	   .removeAttr('style');
    
}

$(document).on('mousemove', ".project-tile", parrallaxHover).on("mouseout", ".project-tile", removeParrallax);



// Card component for showcasing projects 
function ProjectThis(props) {
    return (
	<div className="project-tile fade fade-2">

	    <div className="project-tile-content">
		<h1 className="project-title"><a href={props.url}>{props.title}</a></h1>
		<p className="project-description">{props.description}</p>
	    </div>
	    
	</div>
    );
}

export default ProjectThis; 
