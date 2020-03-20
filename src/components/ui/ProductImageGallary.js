import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./CustomAliceCarousel.css";
class ProductImageGallery extends React.Component {
  item = [
    "https://rukminim1.flixcart.com/image/832/832/k7dnonk0/mobile/r/r/t/realme-6-rbs0601in-original-imafpmg2aqdf2dqm.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/832/832/k7c88sw0/mobile/7/n/f/realme-6-rbs0605in-original-imafphs6ggscdzgk.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/832/832/k7dnonk0/mobile/7/n/f/realme-6-rbs0605in-original-imafpmft8nkyapha.jpeg?q=70"
  ];

  state = {
    currentIndex: 0,
    itemsInSlide: 1,
    responsive: { 0: { items: 1 } },
    galleryItems: this.item.map(i => (
      <img
        src={i}
        alt=""
        style={{
          maxHeight: "400px",
          maxWidth: "600px",
          height: "auto",
          width: "auto",
          // display: "block",
          marginLeft: "auto",
          marginRight: "auto"
          // width: "50%"
        }}
      />
    ))
  };

  slidePrevPage = () => {
    const currentIndex = this.state.currentIndex - this.state.itemsInSlide;
    this.setState({ currentIndex });
  };

  slideNextPage = () => {
    const {
      itemsInSlide,
      galleryItems: { length }
    } = this.state;
    let currentIndex = this.state.currentIndex + itemsInSlide;
    if (currentIndex > length) currentIndex = length;

    this.setState({ currentIndex });
  };

  handleOnSlideChange = event => {
    const { itemsInSlide, item } = event;
    this.setState({ itemsInSlide, currentIndex: item });
  };

  render() {
    const { currentIndex, galleryItems, responsive } = this.state;

    return (
      <div>
        <AliceCarousel
          items={galleryItems}
          slideToIndex={currentIndex}
          responsive={responsive}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          onResized={this.handleOnSlideChange}
          autoPlay={false}
          autoPlayInterval={3000}
          buttonsDisabled={true}
        />
      </div>
    );
  }
}

export default ProductImageGallery;
