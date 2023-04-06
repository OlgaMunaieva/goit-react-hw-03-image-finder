import '../styles.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  closeModal = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  render() {
    const { src, alt, onClick } = this.props;
    return (
      <div className="Overlay" onClick={() => onClick()}>
        <div className="Modal">
          <img src={src} alt={alt} width="800" height="600" />
        </div>
      </div>
    );
  }
}

export default Modal;
