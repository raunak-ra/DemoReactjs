import React, { Component } from "react";

class DispTask extends Component {
  render() {
    return (
      <div className="displaytask" id="taskcop">
        <h2>TASK LISTS TO COMPLETE</h2>
        <ul id="items">
         {
           this.props.items.map(item => <li>
             {item}
             <button className='editBtn'>Edit</button> <button onclick='deleteItem(this)' className='deleteBtn'>Delete</button><hr></hr></li>)
         }
        </ul>
      </div>
    );
  }
}

export default DispTask;
