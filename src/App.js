import React, { Component } from 'react';
import globalStyle from '../public/stylesheets/global.css';
import './App.css';
import toucan from "..//public//images//Toco_toucan_closeup300x300.png";
import ProjectCard from './projectCard.js';

class App extends Component {
  render() {
    var title='Create legend.todo';
    var description = "I'm going to create a project management app that feels like an rpg. After all " +
      "what are our larger projects but quests on our life adventure? Quests are made up of smaller missions " +
      "that represent discrete tasks that must be completed in order to complete the request. For example, " +
      "one mission to complete on the way to completing this project might be to design and create a login and " +
      "authentication screen. You can log time against missions, and optionally enter progress notes discussing " +
      "how things are going, what's working, what's not working. Of course, all these things award exp and gold. " +
      "Exp is a way to help quantify your work towards your goals. Hopefully it will serve as a motivator to make progress." +
      "Gold can be used to buy rewards, and serves as a way of allowing you to treat yourself.";
    var dueDate = "04/17/18";
    var timeSpent = "20.5";
    var timeEstimate = "100.0";
    var expReward="50,000";
    var goldReward="2,000";
    var imagePath = toucan
    return (
      <div className="App">
        <div id="add-project-container">
          <div className="button-div">
            Add Project
          </div>
        </div>
        <ProjectCard title={title} description={description} imagePath={imagePath} timeSpent={timeSpent}
          dueDate={dueDate} timeEstimate={timeEstimate} expReward={expReward} goldReward={goldReward}/>
      </div>
    );
  }
}

export default App;
