import React from "react";
import { Form } from "react-bootstrap";
import Preview from "../Preview";

const Banner = ({ handleChange, handleImage }) => {
  return (
    <div>
      <Form>
        <h2>Banner Section</h2>
        <hr />
        <Form.Group>
          <Form.Label>Banner Heading</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Heading"
            name="serviceBannerHeading"
            onChange={handleChange}
          />
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Banner Tittle</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Heading"
            name="serviceBannerTitle"
            onChange={handleChange}

          />
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Banner Image</Form.Label>
          <div>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control visibility-hidden"
                id="servicesBannerImg"
                name="servicesBannerImg"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="servicesBannerImg">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{image ? <Preview file={image.name} /> : "No Image"}</div> */}
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Banner;
