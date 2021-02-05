import React, { Component } from "react";
import BT3Product from "./BT3Product";

export default class BT3ProducList extends Component {
  render() {
    return (
      <div>
        <div className="row text-center">
          <div className="col-3">
            <BT3Product></BT3Product>
          </div>
          <div className="col-3">
            <BT3Product></BT3Product>
          </div>
          <div className="col-3">
            <BT3Product></BT3Product>
          </div>
          <div className="col-3">
            <BT3Product></BT3Product>
          </div>
        </div>
      </div>
    );
  }
}
