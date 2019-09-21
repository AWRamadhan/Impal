import React, { Component } from "react";
import Navbars from "./Navbars";
import { Jumbotron } from "react-bootstrap";

class UserAdmin extends Component {
  render() {
    return (
      <div className="UserAdmin">
        <Navbars />
        <Jumbotron>
          <h3 className="text-center">Admin</h3>
          <div className="btn-group-lg text-center" role="group">
            <button type="button" className="btn btn-primary">
              Buat Lelang
            </button>
            <button type="button" className="btn btn-primary">
              Hapus Lelang
            </button>
            <button type="button" className="btn btn-primary">
              Validasi Barang
            </button>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default UserAdmin;
