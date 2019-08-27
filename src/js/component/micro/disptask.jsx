import React, { Component } from "react";

class DispTask extends Component {
  render() {
    return (
      <div className="displaytask" id="taskcop">
        <h2>TASK LISTS TO COMPLETE</h2>
        <ul id="items"></ul>
      </div>
    );
  }
}

export default DispTask;
