import React from "react";
import { Form } from "react-bootstrap";
import CKeditor from "../Editor";

const OurCompany = () => {
  return (
    <div>
      <Form>
        <h2>Our Company Services Section</h2>
        <hr />
        <Form.Group>
          <Form.Label>Section Main Heading</Form.Label>
          <Form.Control type="text" placeholder="Enter The Main Heading" />
          <hr />
          <div>
            <Form.Label>Our Company Image</Form.Label>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control visibility-hidden"
                id="customFileLang"
                name="serviceOurCompanyImg  "
                // onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="customFileLang">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{image ? <Preview file={image.name} /> : "No Image"}</div> */}
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Section Sub Heading</Form.Label>
          <Form.Control type="text" placeholder="Enter the Sub Heading" />
          <hr />
          <Form.Label>Section Description</Form.Label>
          <CKeditor />
        </Form.Group>
        <hr />
        <h3>Our Company Titles</h3>
        <hr />
        <Form.Group>
          <Form.Label>Title 1</Form.Label>
          <Form.Control type="text" placeholder="Enter Title 1" />
          <hr />
          <Form.Label>Title 2</Form.Label>
          <Form.Control type="text" placeholder="Enter Title 2" />
          <hr />
          <Form.Label>Title 3</Form.Label>
          <Form.Control type="text" placeholder="Enter Title 3" />
          <hr />
          <Form.Label>Title 4</Form.Label>
          <Form.Control type="text" placeholder="Enter Title 4" />
          <hr />
          <Form.Label>Title 5</Form.Label>
          <Form.Control type="text" placeholder="Enter Title 5" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default OurCompany;
