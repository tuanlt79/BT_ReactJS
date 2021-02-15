import React, { Component } from "react";

export default class ListGlasses extends Component {
  render() {
    let { showGlasses, changeGlasse } = this.props;
    return (
      <div>
        <div style={{border:"none"}}
          className="card"
          onClick={() => {
            changeGlasse(showGlasses);
          }}
        >
          <img
            className="card-img-top"
            src={showGlasses.url}
            alt={showGlasses.url}
          />
        </div>
      </div>
    );
  }
}
