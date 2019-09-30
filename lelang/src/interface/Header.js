import React, { Component } from "react";
import gambar1 from "../assets/img/intro-carousel/header-auction.jpg";
import gambar2 from "../assets/img/intro-carousel/header-auction2.jpg";
import gambar3 from "../assets/img/intro-carousel/header-auction3.jpg";
import gambar4 from "../assets/img/intro-carousel/header-auction4.jpg";

import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  Dot,
  DotGroup
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <CarouselProvider
          naturalSlideWidth={90}
          naturalSlideHeight={50}
          totalSlides={4}
        >
          <Slider>
            <Slide index={0}>
              <Image isBgImage="true" src={gambar1} />
              <div class="carousel-content">
                <h2>Auction</h2>
                <p>
                  Auction adalah proses membeli dan menjual barang atau jasa
                  dengan cara menawarkan kepada penawar, menawarkan tawaran
                  harga lebih tinggi, dan kemudian menjual barang kepada penawar
                  harga tertinggi.
                </p>
                <a href="#featured-services" class="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </Slide>
            <Slide index={1}>
              <Image isBgImage={true} src={gambar2} />
              <div class="carousel-content">
                <h2>Auction</h2>
                <p>
                  Auction adalah proses membeli dan menjual barang atau jasa
                  dengan cara menawarkan kepada penawar, menawarkan tawaran
                  harga lebih tinggi, dan kemudian menjual barang kepada penawar
                  harga tertinggi.
                </p>
                <a href="#featured-services" class="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </Slide>
            <Slide index={2}>
              <Image isBgImage="True" src={gambar3}></Image>
              <div class="carousel-content">
                <h2>Auction</h2>
                <p>
                  Auction adalah proses membeli dan menjual barang atau jasa
                  dengan cara menawarkan kepada penawar, menawarkan tawaran
                  harga lebih tinggi, dan kemudian menjual barang kepada penawar
                  harga tertinggi.
                </p>
                <a href="#featured-services" class="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </Slide>
            <Slide index={3}>
              <Image isBgImage="True" src={gambar4}></Image>
              <div class="carousel-content">
                <h2>Auction</h2>
                <p>
                  Auction adalah proses membeli dan menjual barang atau jasa
                  dengan cara menawarkan kepada penawar, menawarkan tawaran
                  harga lebih tinggi, dan kemudian menjual barang kepada penawar
                  harga tertinggi.
                </p>
                <a href="#featured-services" class="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </Slide>
          </Slider>
          <DotGroup />
        </CarouselProvider>
      </div>
    );
  }
}

export default Header;
