import Styles from './galleryItem.module.css';
import { Link } from 'react-router-dom';

function GalleryItem(props) {
  return (
    <Link className={Styles.imageContainer} to={{pathname: `/image_details/${props.imageNumber + 1}`, image: props.image}}>
      <img className={Styles.image} src={props.image} alt="gallery item" />
    </Link>
  )
}

export default GalleryItem;
