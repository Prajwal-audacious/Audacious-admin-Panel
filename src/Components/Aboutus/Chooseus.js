import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Preview from "../Preview";
import CKeditor from "../Editor";

const Chooseus = () => {
  const [imgInput, setImgInput] = useState(null);

  return (
    <div>
      <Form>
        <h2>Why To Go For Audacious Techiegent Section </h2>
        <hr />
        <Form.Group>
          <Form.Label>Section Title</Form.Label>
          <Form.Control type="text" placeholder="Enter the Title" />
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Why To Go Section Image</Form.Label>
          <div className="custom-file">
            <Form.Control
              type="file"
              className="form-control"
              id="WhyusSection"
              onChange={(e) => setImgInput(e.target.files[0])}
            />
            <label className="custom-file-label" htmlFor="WhyusSection">
              Upload image
            </label>
          </div>
          <hr />
          <div>{imgInput ? <Preview file={imgInput} /> : "No Image"}</div>
        </Form.Group>
        <hr />
        <Form.Group>
          <div>
            <Form.Label>Sub Heading 1</Form.Label>
            <Form.Control type="text" placeholder="Enter Heading 1" />
            <hr />
            <Form.Label>Content 1</Form.Label>
            <CKeditor />
          </div>
          <hr />
          <div>
            <Form.Label>Sub Heading 2</Form.Label>
            <Form.Control type="text" placeholder="Enter Heading 2" />
            <hr />
            <Form.Label>Content 2</Form.Label>
            <CKeditor />
          </div>
          <hr />
          <div>
            <Form.Label>Sub Heading 3</Form.Label>
            <Form.Control type="text" placeholder="Enter Heading 3" />
            <hr />
            <Form.Label>Content 3</Form.Label>
            <CKeditor />
          </div>
          <hr />
          <div>
            <Form.Label>Sub Heading 4</Form.Label>
            <Form.Control type="text" placeholder="Enter Heading 4" />
            <hr />
            <Form.Label>Content 4</Form.Label>
            <CKeditor />
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Chooseus;
