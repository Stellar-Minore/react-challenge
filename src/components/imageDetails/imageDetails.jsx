import { useLocation } from 'react-router-dom';
import Styles from './imageDetails.module.css';

function ImageDetails(props) {
  const imageNumber = 0;
  const location = useLocation();

  if (!sessionStorage.getItem(`image-${imageNumber}`) && location.state.image) {
    sessionStorage.setItem(`image-${imageNumber}`, location.state.image);
  }

  return (
    <div className={Styles.mainContainer}>
      <p>This is image number ? in the grid</p>
      <img src={sessionStorage.getItem(`image-${imageNumber}`)} alt={`Character # ${imageNumber}`} />
    </div>
  )
}

export { ImageDetails };
