import React, { Component } from "react";

export default class DemoState extends Component {
  userName = " Tuan dep trai";
  state = {
    isLogin: false,
  };
  // isLogin = false

  renderTemplate = () => {
    if (this.state.isLogin) {
      return <a className="nav-link">Hello {this.userName}</a>;
    }
    return (
      <button
        className="btn btn-danger"
        onClick={(e) => {
          //khi click vào nút đăng nhập => gọi hàm handle login
          this.handLogin();
        }}
      >
        Dang Nhap
      </button>
    );
  };
  handLogin = (e) => {
    let newState = {
      isLogin: true,
    };
    this.setState(newState); //this.setSate la phuong thuc co san cua React class componet dung de set lai gia tri cua bien sate
  };
  render() {
    return (
      <div>
        <div classname="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  {/* {this.isLogin ? (
                    <a className="nav-link">Hello {this.userName}</a>
                  ) : (
                    <button>Dang Nhap</button>
                  )} */}
                  {this.renderTemplate()}
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
