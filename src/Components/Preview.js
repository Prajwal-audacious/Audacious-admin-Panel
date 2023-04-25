import React, { useState } from "react";
import { Image } from "react-bootstrap";

const Preview = ({ file }) => {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };
  return (
    <>
      <Image
        src={preview}
        className="multiple-images"
        align="start"
        rounded
        width={100}
        height={100}
      />
    </>
  );
};

export default Preview;
