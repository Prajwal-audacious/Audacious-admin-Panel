import React from "react";
import { Form } from "react-bootstrap";
import CKeditor from "../Editor";

const WorkingSection = () => {
  return (
    <div>
      <Form>
        <h2>Working Process of our Company Section</h2>
        <hr />

        <Form.Group>
          <Form.Label>Sectiton Main Heading</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Heading"
            name="serviceWorkingHeading"
          />
        </Form.Group>
        <hr />
        <h3>Development</h3>
        <hr />
        <Form.Group>
          <div>
            <Form.Label>Section Image 1 </Form.Label>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control visibility-hidden"
                id="customFileLang"
                name="serviceWorkingImg_1"
                // onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="customFileLang">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{image ? <Preview file={image.name} /> : "No Image"}</div> */}
          </div>
          <hr />
          <Form.Label>Sub Heading 1</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub Heading"
            name="serviceWorkingTitle_1"
          />
          <hr />
          <Form.Label>Section Discription 1</Form.Label>
          <CKeditor />
        </Form.Group>
        <hr />
        <h3>Testing</h3>
        <hr />
        <Form.Group>
          <div>
            <Form.Label>Section Image 2 </Form.Label>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control visibility-hidden"
                id="customFileLang"
                name="serviceWorkingImg_2"
                // onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="customFileLang">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{image ? <Preview file={image.name} /> : "No Image"}</div> */}
          </div>
          <hr />
          <Form.Label>Sub Heading 1</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub Heading"
            name="serviceWorkingTitle_2"
          />
          <hr />
          <Form.Label>Section Discription 2</Form.Label>
          <CKeditor />
        </Form.Group>
        <hr />
        <h3>Bussiness Consultation</h3>
        <hr />
        <Form.Group>
          <div>
            <Form.Label>Section Image 3 </Form.Label>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control visibility-hidden"
                id="customFileLang"
                name="serviceWorkingImg_3"
                // onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="customFileLang">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{image ? <Preview file={image.name} /> : "No Image"}</div> */}
          </div>
          <hr />
          <Form.Label>Sub Heading 1</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub Heading"
            name="serviceWorkingTitle_3"
          />
          <hr />
          <Form.Label>Section Discription 3</Form.Label>
          <CKeditor />
        </Form.Group>
      </Form>
    </div>
  );
};

export default WorkingSection;
