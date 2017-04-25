import React, { Component } from 'react';
import globalStyle from '../public/stylesheets/global.css';
import './App.css';
import toucan from "..//public//images//Toco_toucan_closeup300x300.png";
import { ToolbarItem } from './ToolbarItem.js'
import ProjectCard from './projectCard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [
        new ToolbarItem("Dashboard"),
        new ToolbarItem("Projects"),
        new ToolbarItem("Home"),
      ]
    }
  }
  /**
 * Given a toolbar item, generates a list item for the toolbar
 * @param {ToolbarItem} action Toolbar action item
 * @returns JSX.IntrinsicElements.li
 * @memberOf App
 */
  renderToolbarItem(element, index) {
    return (
      <li className="Header-Toolbar-Item" key={index}>{element.text}</li>
    )
  }
  /**
 * 
 * Adds a new element to the action array
 * @param {ToolbarItem} action - The toolbar action item to add
 * @param {Number} position - the one-indexed position to insert the action at. By default, adds to the end
 * @memberOf App
 */
  addAction(action, position) {
    var actions = this.state.actions
    if (position > this.state.actions.length) {
      throw Error('Header.addAction: position must be less than the number of current toolbar items. Length: ' + actions.length);
    }
    else if (position > 0) {
      actions.splice((position - 1), 0, action);
    }
    else {
      actions.push(action);
    }
    this.setState({ actions: actions });
  }
  render() {
    var title = 'Create legend.todo';
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
    var expReward = "50,000";
    var goldReward = "2,000";
    var imagePath = toucan;

    return (
      <div className="App">
        <div className="App-Header-container">
          <ul className="App-Header-Toolbar">
            {this.state.actions.map(this.renderToolbarItem)}
          </ul>
        </div>
        <div id="add-project-container">
          <div className="button-div">
            Add Project
          </div>
        </div>
        <ProjectCard title={title} description={description} imagePath={imagePath} timeSpent={timeSpent}
          dueDate={dueDate} timeEstimate={timeEstimate} expReward={expReward} goldReward={goldReward} />
      </div>
    );
  }
}

export default App;
