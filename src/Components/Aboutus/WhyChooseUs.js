import React from "react";
import { Form } from "react-bootstrap";
import CKeditor from "../Editor";
import Preview from "../Preview";

const WhyChooseUs = ({ handleChange, handleCkeditorValues, handleImage }) => {
  return (
    <div>
      <Form>
        <h2>Why Choose Us Section</h2>
        <hr />
        <Form.Group>
          <div>
            <Form.Label>Section Heading</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Heading"
              name="chooseUs_heading"
              onChange={handleChange}
            />
          </div>
          <hr />
          <div>
            <Form.Label>Section Sub Heading</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Subheading"
              name="chooseUs_sub_heading"
              onChange={handleChange}
            />
          </div>
          <hr />
          <div>
            <Form.Label>Section Description</Form.Label>
            <CKeditor
              onChange={(event, editor) => {
                handleCkeditorValues(event, editor, "WhyChooseUsDescription");
              }}
            />
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <h3>Why To Choose Us Points</h3>
          <hr />
          <div>
            <Form.Label>Point 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Point 1"
              name="chooseUs_point1"
              onChange={handleChange}
            />
          </div>
          <hr />
          <div>
            <Form.Label>Point 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Point 2"
              name="chooseUs_point2"
              onChange={handleChange}
            />
          </div>
          <hr />
          <div>
            <Form.Label>Point 3</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Point 3"
              name="chooseUs_point3"
              onChange={handleChange}
            />
          </div>
          <hr />
          <div>
            <Form.Label>Point 4</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Point 4"
              name="chooseUs_point4"
              onChange={handleChange}
            />
          </div>
          <hr />
          <div>
            <Form.Label>Point 5</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Point 5"
              name="chooseUs_point5"
              onChange={handleChange}
            />
          </div>
          <hr />
          <div>
            <Form.Label>Point 6</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Point 6"
              name="chooseUs_point6"
              onChange={handleChange}
            />
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Section Tmage</Form.Label>

          <div className="custom-file">
            <Form.Control
              type="file"
              className="form-control visibility-hidden"
              id="WhyChooseus"
              name="whyChooseUsImg"
              onChange={handleImage}
            />
            <label className="custom-file-label" htmlFor="WhyChooseus">
              Upload image
            </label>
          </div>
          <hr />
          {/* <div>{image ? <Preview file={image} /> : "No Image"}</div> */}
        </Form.Group>
      </Form>
    </div>
  );
};

export default WhyChooseUs;
