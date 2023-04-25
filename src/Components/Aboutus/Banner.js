import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Preview from "../Preview";

const Banner = () => {
  const [image, setImage] = useState(null);

  //   console.log(image);
  return (
    <div>
      <Form>
        <h2> About Us Banner Section</h2>
        <hr />
        <Form.Group>
          <Form.Label>About Us Title</Form.Label>
          <Form.Control
            //     defaultValue={data.title}
            type="text"
            name="title"
            placeholder="Enter banner title"
            //     onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Banner Image</Form.Label>
          <div className="custom-file">
            <Form.Control
              type="file"
              className="form-control visibility-hidden"
              id="customFileLang"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <label className="custom-file-label" htmlFor="customFileLang">
              Upload image
            </label>
          </div>
          <hr />
          <div>{image ? <Preview file={image} /> : "No Image"}</div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Banner Sub Title</Form.Label>
          <Form.Control
            //     defaultValue={data.title}
            type="text"
            name="bannertitle"
            placeholder="Enter banner title"
            //     onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Banner;
