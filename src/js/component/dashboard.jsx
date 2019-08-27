import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <ul className="list" id="nav">
          <li className="list-item" name="popup" id="todo">
            TODO
          </li>
          <li className="list-item" name="popup" id="user">
            USER
          </li>
          <li className="list-item" name="popup" id="dept">
            DEPT
          </li>
          <li className="list-item" name="popup" id="logout">
            LOGOUT
          </li>
        </ul>
      </div>
    );
  }
}

export default Dashboard;
