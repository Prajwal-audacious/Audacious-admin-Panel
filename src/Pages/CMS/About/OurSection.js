import React from "react";
import { Form } from "react-bootstrap";
import CKeditor from "../../../Components/Editor";
import Preview from '../../../Components/Preview';


const OurSection = ({ handleChange, handleCkeditorValues, handleImage }) => {
  return (
    <div>
      <Form>
        <h2>Our Section</h2>
        <hr />
        <Form.Group>
          <Form.Label>Section Heading</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Heading"
            name="aboutUsOurSectionHeading"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Our Section Description</Form.Label>
          <CKeditor
            onChange={(event, editor) => {
              handleCkeditorValues(event, editor, "ourSectionDescription");
            }}
          />
        </Form.Group>
        <hr />
        <h3>Mission And Vision</h3>
        <hr />
        <Form.Group>
          <Form.Label>Our Mission Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            name="AboutUsOurMissionTitle"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Our Mission Description</Form.Label>
          <CKeditor
            onChange={(event, editor) => {
              handleCkeditorValues(event, editor, "ourMissionDescription");
            }}
          />
          <hr />
          <div>
            <Form.Label>Our Mission Image</Form.Label>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control"
                name="aboutUsOurSectionMissionImg1"
                id="OurSection1"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="OurSection1">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{imgInput ? <Preview file={imgInput} /> : "No Image"}</div> */}
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Our Vision Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            name="aboutUsOurVisionTitle"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Our Vision Content</Form.Label>
          <CKeditor
            onChange={(event, editor) => {
              handleCkeditorValues(event, editor, "ourVisionDescription");
            }}
          />
          <hr />
          <div>
            <Form.Label>Our Vision Image</Form.Label>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control"
                id="OurSection2"
                name="aboutUsOurSectionVisionImg2"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="OurSection2">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{imgInput ? <Preview file={imgInput} /> : "No Image"}</div> */}
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default OurSection;
