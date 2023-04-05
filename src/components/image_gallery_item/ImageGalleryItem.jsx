import '../styles.css';
import { Component } from 'react';
// import * as basicLightbox from 'basiclightbox';
// import Modal from 'components/modal/Modal';

class ImageGalleryItem extends Component {
  static defaultProps = {
    src: '',
    alt: '',
    largeImage: '',
  };

  createModal = () => {
    console.log(this.props.largeImage);
    console.log(this.props.alt);
    this.props.isShowModal(this.props.largeImage, this.props.alt);
    // return <Modal src={this.props.largeImage} alt={this.props.alt} />;
  };

  render() {
    const { src, alt } = this.props;

    return (
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={src}
          alt={alt}
          onClick={this.createModal}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
