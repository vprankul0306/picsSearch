function ImageShow(imgLink) {
  return (
    <div>
      <img
        src={imgLink.imgLink}
        style={{
          width: "50%",
          height: "50%",
        }}
      />
    </div>
  );
}

export default ImageShow;
