import React from "react";
import { Form } from "react-bootstrap";
import CKeditor from "../../../Components/Editor";
import Preview from '../../../Components/Preview';

const MobileDev = ({ handleCkeditorValues, handleImage, handleChange }) => {
  return (
    <div>
      <Form>
        <h2>Mobile Development Section</h2>
        <hr />
        <Form.Group>
          <Form.Label>Section Main Heading</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Main Heading"
            name="mobileDevMainHeading"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Section Description</Form.Label>
          <CKeditor
            onChange={(event, editor) => {
              handleCkeditorValues(event, editor, "mobileDevDescription");
            }}
          />
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Section Image</Form.Label>
          <div>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control visibility-hidden"
                id="mobileDevImg"
                name="mobileDevImg"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="mobileDevImg">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{image ? <Preview file={image.name} /> : "No Image"}</div> */}
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <h3>Section Titles</h3>
          <hr />
          <Form.Label>Title 1</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 1"
            name="mobileDevTitle_1"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 2"
            name="mobileDevTitle_2"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 3</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 3"
            name="mobileDevTitle_3"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 4</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 4"
            name="mobileDevTitle_4"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 5</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 5"
            name="mobileDevTitle_5"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 6</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 6"
            name="mobileDevTitle_6"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default MobileDev;
