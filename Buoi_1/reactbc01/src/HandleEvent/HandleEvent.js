import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("Hello Tuan");
  };
  showMessage = (name) => {
    alert("Hello " + name + " dep zai");
  };
  render() {
    return (
      <div>
        {/* <button className="btn btn-success" onClick={this.handleClick}>
          click me
        </button>
        <button
          className="btn btn-dark"
          onClick={this.showMessage.bind(this, "tuan")}
        >
          Messeage
        </button> */}
        {/* truyen dac danh */}
        <button
          className="btn btn-dark"
          onClick={(e) => {
            this.showMessage("Test");
          }}
        >
          Messeage
        </button>
      </div>
    );
  }
}
