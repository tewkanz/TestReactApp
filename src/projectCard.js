import React, { Component } from 'react';
import './projectCard.css'

class ProjectCard extends Component {
    render(){
        return(
            <div className="projectCard-container">
                <h1 className="projectCard-titie">{this.props.title}</h1>
                <p className="projectCard-description">{this.props.description}</p>
            </div>
        )
    }
}

export default ProjectCard;