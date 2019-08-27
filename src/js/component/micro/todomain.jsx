import React, { Component } from "react";

class TodoMain extends Component {
  

  searchClick() {
    console.log("Click happened on search");
  }
 
  render() {
    return (
      <div id="todo-popup" className="popup">
        <ul>
          <li>
            <input id="myInput" type="text" placeholder="Add Task" />
          </li>
          <li>
            <button className="sbutton" onClick={this.searchClick}>
              <span>Search </span>
            </button>
          </li>
          <li>
            <button className="sbutton" onClick={() => this.props.addItem("gjhgjhk")}>
              <span>Add </span>
            </button>
          </li>
        </ul>
      </div> );
  }
}
export default TodoMain;
