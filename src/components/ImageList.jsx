/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} imgLink={image.urls.small} />;
  });

  return <div className="image-list"> {renderedImages}</div>;
}

export default ImageList;
