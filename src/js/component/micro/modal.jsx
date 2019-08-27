import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div id="modal">
        <input id="updatetext" type="text" />
        <button className="updatebutton" >
          Update
        </button>
      </div>
    );
  }
}

export default Modal;
