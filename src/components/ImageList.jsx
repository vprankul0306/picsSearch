/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow imgLink={image.urls.regular} />;
  });

  return <div> {renderedImages}</div>;
}

export default ImageList;
