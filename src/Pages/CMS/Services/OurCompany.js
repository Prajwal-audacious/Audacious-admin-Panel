import React from "react";
import { Form } from "react-bootstrap";
import CKeditor from "../../../Components/Editor";

const OurCompany = ({ handleCkeditorValues, handleImage, handleChange }) => {
  return (
    <div>
      <Form>
        <h2>Our Company Services Section</h2>
        <hr />
        <Form.Group>
          <Form.Label>Section Main Heading</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter The Main Heading"
            name="ourCompanyMainHeading"
            onChange={handleChange}
          />
          <hr />
          <div>
            <Form.Label>Our Company Image</Form.Label>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control visibility-hidden"
                id="OurCompanyImg"
                name="OurCompanyImg  "
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="OurCompanyImg">
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
          <Form.Control
            type="text"
            placeholder="Enter the Sub Heading"
            name="ourCompanyMainSubHeading"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Section Description</Form.Label>
          <CKeditor
            onChange={(event, editor) => {
              handleCkeditorValues(event, editor, "ourCompanyDescription");
            }}
          />
        </Form.Group>
        <hr />
        <h3>Our Company Titles</h3>
        <hr />
        <Form.Group>
          <Form.Label>Title 1</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 1"
            name="ourCompanyTitle_1"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 2"
            name="ourCompanyTitle_2"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 3</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 3"
            name="ourCompanyTitle_3"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 4</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 4"
            name="ourCompanyTitle_4"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 5</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 5"
            name="ourCompanyTitle_5"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default OurCompany;
