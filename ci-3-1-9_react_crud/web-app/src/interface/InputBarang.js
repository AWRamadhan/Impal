import React, { Component } from "react";
import Navbars from "./Navbars";
import { Jumbotron } from "react-bootstrap";

class InputBarang extends Component {
  render() {
    return (
      <div className="InputBarang">
        <Navbars />
        <Jumbotron>
          <div className="form-group">
            <label>Nama Barang</label>
            <input className="form-control" type="text"></input>
            <label>Deskripsi</label>
            <textarea
              className="form-control"
              id="deskripsi"
              rows="3"
            ></textarea>
            <label>Gambar</label>
            <input
              type="file"
              className="form-control-file"
              id="GambarBarang"
            ></input>
          </div>
          <button className="btn btn-primary" type="submit">
            Kirim
          </button>
        </Jumbotron>
      </div>
    );
  }
}

export default InputBarang;
