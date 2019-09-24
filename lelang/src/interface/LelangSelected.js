import React, { Component } from "react";
import Navbars from "./Navbars";
import { Jumbotron } from "react-bootstrap";

class LelangSelected extends Component {
  render() {
    return (
      <div className="ValidasiBarang">
        <Navbars />
        <Jumbotron>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <label>Gambar</label>
                <h4 id="timer">00:00</h4>
              </div>
              <div className="col-sm-8">
                <h4>Nama Barang</h4>
                <h5>donec et odio pellentesque diam</h5>
                <h4>Deskripsi</h4>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  In nibh mauris cursus mattis molestie a iaculis at erat.
                  Luctus venenatis lectus magna fringilla urna porttitor rhoncus
                  dolor. Posuere urna nec tincidunt praesent semper feugiat.
                  Semper quis lectus nulla at volutpat diam.
                </h5>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Harga Tawar"
                ></input>
                <button className="btn btn-primary">Tawar</button>
              </div>
              <div className="col-sm-4"></div>
              <div className="col-sm-5">
                <h4>Nama User</h4>
                <h5>Rp 99999999</h5>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default LelangSelected;
