import React from "react";
import { Form } from "react-bootstrap";
import Preview from '../../../Components/Preview';


const Banner = ({ handleChange, handleImage }) => {
  return (
    <div>
      <Form>
        <h2> About Us Banner Section</h2>
        <hr />
        <Form.Group>
          <Form.Label>About Us Title</Form.Label>
          <Form.Control
            type="text"
            name="aboutUsBannerHeading"
            onChange={handleChange}
            placeholder="Enter banner title"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Banner Image</Form.Label>
          <div className="custom-file">
            <Form.Control
              type="file"
              name="aboutUsBannerImg"
              className="form-control visibility-hidden"
              id="customFileLang"
              onChange={handleImage}
            />
            <label className="custom-file-label" htmlFor="customFileLang">
              Upload image
            </label>
          </div>
          <hr />
          {/* <div>{image ? <Preview file={image.name} /> : "No Image"}</div> */}
        </Form.Group>
        <Form.Group>
          <Form.Label>Banner Sub Title</Form.Label>
          <Form.Control
            type="text"
            name="aboutUsBannerTitle"
            placeholder="Enter banner title"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Banner;
