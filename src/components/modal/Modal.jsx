import '../styles.css';
import { Component } from 'react';

class Modal extends Component {
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

// const Modal = ({ src, alt, onClick }) => {
//   console.log(src);
//   console.log(alt);
//   return (
//     <div className="Overlay">
//       <div className="Modal">
//         <img src={src} alt={alt} width="800" height="600" onClick={onClick()} />
//       </div>
//     </div>
//   );
// };

export default Modal;
