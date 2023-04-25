import React, { useState } from "react";
import { Form } from "react-bootstrap";
import CKeditor from "../Editor";
import Preview from "../Preview";

const Technology = () => {
  const [imgInput, setImgInput] = useState(null);
  console.log(imgInput);

  return (
    <div>
      <Form>
        <h2>Welcome To the World Section</h2>
        <hr />
        <Form.Group>
          <div>
            <Form.Label>Section Heading</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Heading"
              // defaultValue={(e)=>e.target.value}
            />
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <div style={{ Color: "grey" }}>
            <Form.Label>Section Subcontent</Form.Label>
            <CKeditor />
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <div style={{ Color: "grey" }}>
            <Form.Label>Section Maincontent</Form.Label>
            <CKeditor />
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Section Image</Form.Label>
          <div className="custom-file">
            <Form.Control
              type="file"
              className="form-control"
              id="technologySection"
              onChange={(e) => setImgInput(e.target.files[0])}
            />
            <label className="custom-file-label" htmlFor="technologySection">
              Upload image
            </label>
          </div>
          <hr />
          <div>{imgInput ? <Preview file={imgInput} /> : "No Image"}</div>
        </Form.Group>
        <Form.Group>
          <div>
            <Form.Label>Project Successful Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Title" />
            <hr />
            <Form.Label>Project Successful Count</Form.Label>
            <Form.Control type="number" placeholder="Enter Your Title" />
          </div>
          <hr />
          <div>
            <Form.Label>Satisfied Client Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Title" />
            <hr />
            <Form.Label>Satisfied Client Count</Form.Label>
            <Form.Control type="number" placeholder="Count" />
          </div>
          <hr />
          <div>
            <Form.Label>Team Member Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Title" />
            <hr />
            <Form.Label>Team Member Count</Form.Label>
            <Form.Control type="number" placeholder="Count" />
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Technology;
