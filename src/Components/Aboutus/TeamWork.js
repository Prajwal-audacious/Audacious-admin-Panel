import React from "react";
import { Form } from "react-bootstrap";
import Preview from "../Preview";

const TeamWork = ({ handleChange, handleImage }) => {
  return (
    <div>
      <Form>
        <h2>Team Work Section </h2>
        <hr />
        <Form.Group>
          <Form.Label>Image 1</Form.Label>
          <div>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control"
                id="TeamWorkImg1"
                name="aboutUsTeamWorkImg1"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="TeamWorkImg1">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{imgInput ? <Preview file={imgInput} /> : "No Image"}</div> */}
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Image 2</Form.Label>
          <div>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control"
                id="TeamWorkImg2"
                name="aboutUsTeamWorkImg2"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="TeamWorkImg2">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{imgInput ? <Preview file={imgInput} /> : "No Image"}</div> */}
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Image 3</Form.Label>
          <div>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control"
                id="TeamWorkImg3"
                name="aboutUsTeamWorkImg3"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="TeamWorkImg3">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{imgInput ? <Preview file={imgInput} /> : "No Image"}</div> */}
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Image 4</Form.Label>
          <div>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control"
                id="TeamWorkImg4"
                name="aboutUsTeamWorkImg4"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="TeamWorkImg4">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{imgInput ? <Preview file={imgInput} /> : "No Image"}</div> */}
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Image 5</Form.Label>
          <div>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control"
                id="TeamWorkImg5"
                name="aboutUsTeamWorkImg5"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="TeamWorkImg5">
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{imgInput ? <Preview file={imgInput} /> : "No Image"}</div> */}
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Image 6</Form.Label>
          <div>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control"
                id="TeamWorkImg6"
                name="aboutUsTeamWorkImg6"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="TeamWorkImg6">
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

export default TeamWork;
