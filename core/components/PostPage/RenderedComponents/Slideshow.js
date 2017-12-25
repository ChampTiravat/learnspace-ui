import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SlideshowWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2em auto;
  height: 500px;
  align-items: center;
  background-color: #ddd;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  position: relative;
`;

const TransitionButton = styled.button`
  top: 40%;
  cursor: pointer;
  position: absolute;
  z-index: 20;
  border: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.7);
`;

const PrevButton = TransitionButton.extend`
  left: 1em;
`;

const NextButton = TransitionButton.extend`
  right: 1em;
`;

const ImagesWrapper = styled.div`
  width: 100%;
  height: 500px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
  height: 500px;
  position: absolute;
`;

/**
 * @name Slideshow
 * @desc Display a set of images as a slideshow with a specific timing
 * @prop images : images to render
 */
class Slideshow extends React.Component {
  state = {
    totalImages: this.props.images.length,
    lastImage: this.props.images.length - 1,
    currentImage: 0
  };

  toPrevImage = () => {
    const { currentImage, totalImages } = this.state;
    if (currentImage !== 0) {
      this.setState(prevState => ({
        currentImage: prevState.currentImage - 1
      }));
    } else {
      this.setState({
        currentImage: totalImages - 1
      });
    }
  };

  toNextImage = () => {
    const { currentImage, lastImage, totalImages } = this.state;
    if (currentImage !== lastImage) {
      this.setState(prevState => ({
        currentImage: prevState.currentImage + 1
      }));
    } else {
      this.setState({
        currentImage: 0
      });
    }
  };

  renderCurrentImage = () => {
    const { currentImage } = this.state;
    const { images } = this.props;
    if (images.length === 0) {
      return null;
    }
    const imageToRender = images.find((image, i) => i === currentImage);
    return <Image src={imageToRender.url} alt={imageToRender.alt} />;
  };

  render() {
    return (
      <SlideshowWrapper>
        <PrevButton onClick={this.toPrevImage}>Previous</PrevButton>
        <NextButton onClick={this.toNextImage}>Next</NextButton>
        <ImagesWrapper>{this.renderCurrentImage()}</ImagesWrapper>
      </SlideshowWrapper>
    );
  }
}

Slideshow.propTypes = {
  images: PropTypes.array
};

export default Slideshow;
