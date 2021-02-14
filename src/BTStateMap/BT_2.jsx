import React, { Component } from "react";

export default class BT_2 extends Component {
  state = {
    imgState: "./glassesImage/v1.png",
  };
  changGlasses = (number) => {
    this.setState({
      imgSrc: `./glassesImage/${number}.png`,
    });
  };
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/g1.jpg",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/g2.jpg",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/g3.jpg",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./glassesImage/g4.jpg",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./glassesImage/g5.jpg",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./glassesImage/g6.jpg",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./glassesImage/g7.jpg",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./glassesImage/g8.jpg",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./glassesImage/g9.jpg",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  // renderGlassess = () => {
  //     const arrGlaseess=this.arrProduct
  // }
  renderGlassess = () => {
    const arrGlassess = this.arrProduct.map((glasses, index) => {
      return (
        <div className="col-2">
           <div key={index} className=" bg-primary mt-5 " style={{ width: "100%" ,cursor:"pointer"}}>
          <img
            className="card-img-top"
            src={glasses.url}
            onClick={(e) => {
              this.changGlasses();
            }}
          />
        </div>
       </div>
      );
    });
    return arrGlassess;
  };

  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(./glassesImage/background.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <h1 className="text-center mb-5">Try Glassess App Online</h1>
            <div className="row">
              <div className="col-6">
                <div>
                  <img
                    src="./glassesImage/model.jpg"
                    style={{
                      backgroundPosition: "center top",
                      position: "relative",
                      backgroundSize: "cover",
                    }}
                  />
                  <img
                    src={this.state.imgState}
                    style={{ position: "absolute", width: "320px",left: "95px",
                    top: "140px",
                    opacity: 0.8,
                    height: "125px"}}
                  />
                  
                </div>
              </div>
              <div style={{backgroundColor:"white"}}>
                <div className="row">
                  {this.renderGlassess()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
