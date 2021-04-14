import Styles from './galleryItem.module.css';

function GalleryItem(props) {
  return (
    <div>
      <img className={Styles.image} src={props.image} alt="gallery item" />
    </div>
  )
}

export default GalleryItem;
