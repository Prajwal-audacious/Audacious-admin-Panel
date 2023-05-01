import React from "react";
import { Form } from "react-bootstrap";
import Preview from "../Preview";
import CKeditor from "../Editor";

const Chooseus = ({ handleChange, handleCkeditorValues, handleImage }) => {
  return (
    <div>
      <Form>
        <h2>Why To Go For Audacious Techiegent Section </h2>
        <hr />
        <Form.Group>
          <Form.Label>Section Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Title"
            name="aboutUschooseUsHeading"
            onChange={handleChange}
          />
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Why To Go Section Image</Form.Label>
          <div className="custom-file">
            <Form.Control
              type="file"
              className="form-control"
              name="aboutUsChooseUsImg"
              id="WhyusSection"
              onChange={handleImage}
            />
            <label className="custom-file-label" htmlFor="WhyusSection">
              Upload image
            </label>
          </div>
          <hr />
          {/* <div>{imgInput ? <Preview file={imgInput} /> : "No Image"}</div> */}
        </Form.Group>
        <hr />
        <Form.Group>
          <div>
            <Form.Label>Sub Heading 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Heading 1"
              name="aboutUsChooseUsSubHeading_1"
              onChange={handleChange}
            />
            <hr />
            <Form.Label>Content 1</Form.Label>
            <CKeditor
              onChange={(event, editor) => {
                handleCkeditorValues(
                  event,
                  editor,
                  "chooseUsContent1Description"
                );
              }}
            />
          </div>
          <hr />
          <div>
            <Form.Label>Sub Heading 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Heading 2"
              name="aboutUsChooseUsSubHeading_2"
              onChange={handleChange}
            />
            <hr />
            <Form.Label>Content 2</Form.Label>
            <CKeditor
              onChange={(event, editor) => {
                handleCkeditorValues(
                  event,
                  editor,
                  "chooseUsContent2Description"
                );
              }}
            />
          </div>
          <hr />
          <div>
            <Form.Label>Sub Heading 3</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Heading 3"
              name="aboutUsChooseUsSubHeading_3"
              onChange={handleChange}
            />
            <hr />
            <Form.Label>Content 3</Form.Label>
            <CKeditor
              onChange={(event, editor) => {
                handleCkeditorValues(
                  event,
                  editor,
                  "chooseUsContent3Description"
                );
              }}
            />
          </div>
          <hr />
          <div>
            <Form.Label>Sub Heading 4</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Heading 4"
              name="aboutUsChooseUsSubHeading_4"
              onChange={handleChange}
            />
            <hr />
            <Form.Label>Content 4</Form.Label>
            <CKeditor
              onChange={(event, editor) => {
                handleCkeditorValues(
                  event,
                  editor,
                  "chooseUsContent4Description"
                );
              }}
            />
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Chooseus;
