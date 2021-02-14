import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    mangSinhVien = [
        { ma: 1, ten: 'tuan', tuoi: 29 },
        { ma: 2, ten: 'test le', tuoi: 22 },
        { ma: 3, ten: 'tuan thanh', tuoi: 334 },

    ]
    renderSV = () => {
        // const arrJSX = [];
        // for (let index = 0; index < this.mangSinhVien.length; index++){
        //     let tagP = <p key={index}>{this.mangSinhVien[index].ten}</p>;
        //     arrJSX.push(tagP);
        // }
        // return arrJSX;
        const arrJSX = this.mangSinhVien.map((sinhVien, index) => {
            return <li key={index}>{sinhVien.ten}</li>
        })
        return arrJSX;
    }
    render() {
        return (
            <div className="container">
                <ul>
                    {this.renderSV()}
                </ul>
                <table className="table">
                    <thead>
                        <th>Mã Sinh Viên</th>
                        <th>Tên</th>
                        <th>Tuổi</th>
                    </thead>
                    <tbody>
                        {this.mangSinhVien.map((sinhVien, index) => {
                            return <tr key={index}>
                                <td>{sinhVien.ma}</td>
                                <td>{sinhVien.ten}</td>
                                <td>{sinhVien.tuoi}</td>
                                <td><button className="btn btn-danger">Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
