import React from "react";
import { Form } from "react-bootstrap";
import CKeditor from "../Editor";
import Preview from '../Preview';

const CmsDev = () => {
  return (
    <div>
      <Form>
        <h2>CMS Development Section</h2>
        <hr />
        <Form.Group>
          <Form.Label>Section Main Heading</Form.Label>
          <Form.Control type="text" placeholder="Enter Main Heading" />
          <hr />
          <Form.Label>Section Description</Form.Label>
          <CKeditor />
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Section Image</Form.Label>
          <div>
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
          <h3>Section Titles</h3>
          <hr />
          <Form.Label>Title 1</Form.Label>
          <Form.Control type="text" placeholder="Enter Title 1" />
          <hr />
          <Form.Label>Title 2</Form.Label>
          <Form.Control type="text" placeholder="Enter Title 2" />
          <hr />
          <Form.Label>Title 3</Form.Label>
          <Form.Control type="text" placeholder="Enter Title 4" />
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

export default CmsDev;
