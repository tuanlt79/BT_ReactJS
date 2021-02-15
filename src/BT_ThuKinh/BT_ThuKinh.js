import React, { Component } from "react";
import BT_GlassItem from "./BT_GlassItem";

export default class BT_ThuKinh extends Component {
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
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlasses = () => {
    return this.arrProduct.map((item, index) => {
      return (
        <div className="card" key={index}>
          <div
            className="col-3"
            style={{
              alignSelf: "center",
              border: "none",
              cursor: "pointer",
              height: "200px",
            }}
          >
            <BT_GlassItem Detail={item} changeGlass={this.changeGlasses} />
          </div>
        </div>
      );
    });
  };
  changeGlasses = (Click) => {
    this.setState({
      matKinh: Click,
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(./glassesImage/background.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="container">
          <h1 className="text-center mb-5">Try Glassess App Online</h1>
          <div className="row">
            <div className="col-6">
              <div
                style={{
                  backgroundImage: "url(./glassesImage/model.jpg)",
                  backgroundPosition: "center top",
                  position: "relative",
                  backgroundSize: "cover",
                  height: "585px",
                }}
              >
                <img
                  src={this.state.matKinh.url}
                  alt={this.state.matKinh.desc}
                  style={{
                    position: "absolute",
                    width: "330px",
                    left: "105px",
                    top: "160px",
                    opacity: 0.8,
                    height: "125px",
                  }}
                />
              </div>
            </div>
            <div className="col-6">
              {this.renderGlasses()}
              {/* <BT_GlassItem /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
