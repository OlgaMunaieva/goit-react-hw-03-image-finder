import '../styles.css';

const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={src} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
