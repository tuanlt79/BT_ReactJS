import React, { Component } from "react";
import SinhVien from "./SinhVien";

export default class DemoProps extends Component {
  mangSinhVien = [
    { ma: "sv01", ten: "Tuan", tuoi: 30 },
    { ma: "sv02", ten: "test", tuoi: 30 },
    { ma: "sv03", ten: "tesstt", tuoi: 30 },
  ];
  arrProduct = [

    { id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
   ];


  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center">Thong tin Sinh Vien</h3>
        <div className="row">
          <div className="col-4">
            <SinhVien sinhVien={this.mangSinhVien[0]}
            />
          </div>
          <div className="col-4">
            <SinhVien
             sinhVien={this.mangSinhVien[1]}
            />
          </div>
          <div className="col-4">
            <SinhVien />
          </div>
        </div>
      </div>
    );
  }
}
