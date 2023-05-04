import React from "react";
import { Form } from "react-bootstrap";
import CKeditor from "../../../Components/Editor";
import Preview from '../../../Components/Preview';


const SoftwareDev = ({ handleCkeditorValues, handleImage, handleChange }) => {
  return (
    <div>
      <Form>
        <h2>Software Development Section</h2>
        <hr />
        <Form.Group>
          <Form.Label>Section Main Heading</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Main Heading"
            name="softwareDevMainHeading"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Section Description</Form.Label>
          <CKeditor
            onChange={(event, editor) => {
              handleCkeditorValues(event, editor, "softwareDevDescription");
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
                id="softwareDevImg"
                name="softwareDevImg  "
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="softwareDevImg">
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
            name="softwareDevTitle_1"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 2"
            name="softwareDevTitle_2"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 3</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 4"
            name="softwareDevTitle_3"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 4</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 4"
            name="softwareDevTitle_4"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 5</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 5"
            name="softwareDevTitle_5"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 6</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 6"
            name="softwareDevTitle_6"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 7</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 7"
            name="softwareDevTitle_7"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SoftwareDev;
