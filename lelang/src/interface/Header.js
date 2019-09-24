import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <div classNameName="header">
        <div className="intro-container">
          <div
            id="introCarousel"
            className="carousel  slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators"></ol>

            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="carousel-background">
                  <img
                    src="../assets/img/intro-carousel/header-auction.jpg"
                    alt=""
                  />
                </div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>AuctioN</h2>
                    <p>
                      Auction adalah proses membeli dan menjual barang atau jasa
                      dengan cara menawarkan kepada penawar, menawarkan tawaran
                      harga lebih tinggi, dan kemudian menjual barang kepada
                      penawar harga tertinggi.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-background">
                  <img
                    src="../assets/img/intro-carousel/header-auction2.jpg"
                    alt=""
                  />
                </div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>AuctioN</h2>
                    <p>
                      Auction adalah proses membeli dan menjual barang atau jasa
                      dengan cara menawarkan kepada penawar, menawarkan tawaran
                      harga lebih tinggi, dan kemudian menjual barang kepada
                      penawar harga tertinggi.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-background">
                  <img
                    src="../assets/img/intro-carousel/header-auction3.jpg"
                    alt=""
                  />
                </div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>AuctioN</h2>
                    <p>
                      Auction adalah proses membeli dan menjual barang atau jasa
                      dengan cara menawarkan kepada penawar, menawarkan tawaran
                      harga lebih tinggi, dan kemudian menjual barang kepada
                      penawar harga tertinggi.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-background">
                  <img
                    src="../assets/img/intro-carousel/header-auction4.jpg"
                    alt=""
                  />
                </div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>AuctioN</h2>
                    <p>
                      Auction adalah proses membeli dan menjual barang atau jasa
                      dengan cara menawarkan kepada penawar, menawarkan tawaran
                      harga lebih tinggi, dan kemudian menjual barang kepada
                      penawar harga tertinggi.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#introCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon ion-chevron-left"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>

            <a
              className="carousel-control-next"
              href="#introCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon ion-chevron-right"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
