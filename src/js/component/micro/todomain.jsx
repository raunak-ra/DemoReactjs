import React, { Component } from "react";


class TodoMain extends Component {
  constructor(props){
    super(props);
    this.style = {
      cursor: "pointer",
      background: "red"
    }
  }
  render() {
    return (
      <div id="todo-popup" className="popup">
        <ul>
          <li>
            <input id="myInput" type="text" placeholder="Add Task" />
          </li>
          <li>
            <button className="sbutton" >
              <span>Search </span>
            </button>
          </li>
          <li>
            <button className="sbutton" >
              <span>Add </span>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default TodoMain;
