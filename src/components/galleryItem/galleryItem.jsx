import Styles from './galleryItem.module.css';
import { Link } from 'react-router-dom';

function GalleryItem(props) {
  return (
    <Link
      className={Styles.imageContainer}
      to={`/image_details/${props.imageNumber + 1}`}
      state={{ image: props.image }}>
      <img className={Styles.image} src={props.image} alt="gallery item" />
    </Link>
  )
}

export { GalleryItem };
