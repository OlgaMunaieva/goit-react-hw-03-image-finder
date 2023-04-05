import '../styles.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClick();
      }
    });
  }
  render() {
    const { src, alt, onClick } = this.props;
    return (
      <div className="Overlay">
        <div className="Modal">
          <img
            src={src}
            alt={alt}
            width="800"
            height="600"
            onClick={() => onClick()}
          />
        </div>
      </div>
    );
  }
}

export default Modal;
