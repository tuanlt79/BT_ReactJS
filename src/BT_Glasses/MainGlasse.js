import React, { Component } from "react";
import ListGlasses from "./ListGlasses";

export default class MainGlasse extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    matKinh: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  changeGlasse = (click) => {
    this.setState({
      matKinh: click,
    });
  };
  renderGlasses = () => {
    return this.arrProduct.map((item, index) => {
      return (
        <div className="col-2" style={{ cursor: "pointer" }} key={index}>
          <ListGlasses showGlasses={item} changeGlasse={this.changeGlasse} />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div
          style={{ backgroundImage: "url('./glassesImage/background.jpg')", backgroundPosition:"center", backgroundSize:'cover' }}
        >
          <div className="container">
            <h1 className="text-center mb-5">TRY GLASSES APP ONLINE</h1>
            <div className="row">
              <div
                className="col-5 mb-3"
                style={{
                  backgroundImage: "url('./glassesImage/model.jpg')",
                  height: "585px",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    width: "300px",
                    left: "90px",
                    top: "140px",
                    opacity: 0.8,
                    height: "125px",
                  }}
                  src={this.state.matKinh.url}
                  alt={this.state.matKinh.url}
                />
              </div>
              <div className="col-7">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{this.state.matKinh.name}</h4>
                    <p className="card-text">{this.state.matKinh.desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">{this.renderGlasses()}</div>
          </div>
        </div>
      </div>
    );
  }
}
