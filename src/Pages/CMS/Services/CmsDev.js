import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import CKeditor from "../../../Components/Editor";
import Preview from '../../../Components/Preview';


const CmsDev = ({ handleCkeditorValues, handleImage, handleChange }) => {
  return (
    <div>
      <Form>
        <h2>CMS Development Section</h2>
        <hr />
        <Form.Group>
          <Form.Label>Section Main Heading</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Main Heading"
            name="cmsDevMainHeading"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Section Description</Form.Label>
          <CKeditor
            onChange={(event, editor) => {
              handleCkeditorValues(event, editor, "cmsDevDescription");
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
                id="cmsDevImg"
                name="cmsDevImg  "
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="cmsDevImg">
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
            name="cmsDevTitle_1"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 2"
            name="cmsDevTitle_2"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 3</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 3"
            name="cmsDevTitle_3"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 4</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 4"
            name="cmsDevTitle_4"
            onChange={handleChange}
          />
          <hr />
          <Form.Label>Title 5</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title 5"
            name="cmsDevTitle_5"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default CmsDev;
