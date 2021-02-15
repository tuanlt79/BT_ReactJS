import React, { Component } from "react";

export default class BT_GlassItem extends Component {
  render() {
    let { Detail, changeGlass } = this.props;

    return (
      <div
        className="card"
        onClick={() => {
          changeGlass(Detail);
        }}
      >
        <img className="card-img-top" src={Detail.url} alt={Detail.url} />
        <div className="card-body">
          {/* <h4 className="card-title">{Detail.name}</h4>
          <p className="card-text">{Detail.desc}</p> */}
        </div>
      </div>
    );
  }
}
