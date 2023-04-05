import ImageGalleryItem from 'components/image_gallery_item/ImageGalleryItem';
import '../styles.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ photos }) => {
  console.log(photos);
  return (
    <ul className="ImageGallery">
      {photos.map(photo => (
        <ImageGalleryItem
          key={photo.id}
          src={photo.webformatURL}
          alt={photo.tags}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default ImageGallery;
