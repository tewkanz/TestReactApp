import React, { Component } from 'react';
import './projectCard.css'

class ProjectCard extends Component {
    render(){
        return(
            <div className="projectCard-container">
                <div className="projectCard-imageContainer">
                    <img className="projectCard-image" src={this.props.imagePath} alt="" />
                </div>
                <div className="projectCard-contentContainer">
                    <h1 className="projectCard-titie">{this.props.title}</h1>
                    <ul className="projectCard-addlInfo">
                        <li className="projectCard-timeEstimate">{this.formatTimeEstimate(this.props.timeSpent,this.props.timeEstimate)}</li>
                        <li className="projectCard-dueDate">{this.showDueDate()}</li>
                        <li className="projectCard-expReward">{this.showExpReward()}</li>
                        <li className="projectCard-goldRewards">{this.showGoldReward()}</li>
                    </ul>
                    <p className="projectCard-description">{this.props.description}</p>
                </div>
            </div>
        )
    }
    /**
     * 
     * Returns the string representation of the due date
     * @readonly
     * 
     * @memberOf ProjectCard
     */
    showDueDate(){
        if(String(this.props.dueDate).length === 0){
            return ""
        }
        else{
            return "Due " + String(this.props.dueDate);
        }
    }
    showExpReward(){
        if(String(this.props.expReward).length === 0){
            return ""
        }
        else{
            return String(this.props.expReward) + " EXP";
        }
    }
    showGoldReward(){
        if(String(this.props.goldReward).length === 0){
            return "";
        }
        else{
            return String(this.props.goldReward) + " gold";
        }
    }
    /**
     * 
     * Formats a string for a time estimate as "<timeSpent> / <timeEstimate>"
     * @param {double} timeSpent 
     * @param {double} timeEstimate 
     * 
     * @memberOf ProjectCard
     */
    formatTimeEstimate(timeSpent,timeEstimate){
        var timeSpentString = String(timeSpent);
        var timeEstimateString = String(timeEstimate);
        //TODO: make this actually do number formatting
        if(timeSpentString.length === 0){
            timeSpentString = "<timeSpent>"
        }
        if(timeEstimateString.length === 0){
            timeEstimateString = "<timeEstimate>"
        }
        return timeSpentString + " / " + timeEstimateString + " hours";
    }
}

export default ProjectCard;