import ImageGalleryItem from 'components/image_gallery_item/ImageGalleryItem';
import '../styles.css';
// import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from 'components/modal/Modal';

class ImageGallery extends Component {
  state = {
    isShowModal: false,
    largeImage: '',
    alt: '',
  };

  showModal = (largeImage, alt) => {
    this.setState({ isShowModal: true });
    this.setState({ largeImage: largeImage });
    this.setState({ alt: alt });
    console.log(largeImage);
    console.log(alt);
  };

  hideModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    return (
      <>
        {this.state.isShowModal && (
          <Modal
            src={this.state.largeImage}
            alt={this.state.alt}
            onClick={this.hideModal}
          />
        )}
        <ul className="ImageGallery">
          {this.props.photos.map(photo => (
            <ImageGalleryItem
              key={photo.id}
              src={photo.webformatURL}
              alt={photo.tags}
              largeImage={photo.largeImageURL}
              isShowModal={this.showModal}
              // isHideModal={this.hideModal}
            />
          ))}
        </ul>
      </>
    );
  }
}

// const ImageGallery = ({ photos }) => {
//   console.log(photos);
//   return (
//     <ul className="ImageGallery">
//       {photos.map(photo => (
//         <ImageGalleryItem
//           key={photo.id}
//           src={photo.webformatURL}
//           alt={photo.tags}
//           largeImage={photo.largeImageURL}
//         />
//       ))}
//     </ul>
//   );
// };

// ImageGallery.propTypes = {
//   photos: PropTypes.array.isRequired,
// };

export default ImageGallery;
