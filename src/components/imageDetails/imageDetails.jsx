import React from 'react';
import Styles from './imageDetails.module.css';

function ImageDetails(props) {
  const imageNumber = 0;

  if (!sessionStorage.getItem(`image-${imageNumber}`) && props.location.image) {
    sessionStorage.setItem(`image-${imageNumber}`, props.location.image);
  }

  return (
    <div className={Styles.mainContainer}>
      <p>This is image number ? in the grid</p>
      <img src={sessionStorage.getItem(`image-${imageNumber}`)} alt={`Character # ${imageNumber}`} />
    </div>
  )
}

export default ImageDetails;
