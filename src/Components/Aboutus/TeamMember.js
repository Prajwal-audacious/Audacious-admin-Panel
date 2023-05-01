import React from "react";
import { Form } from "react-bootstrap";
import Preview from "../Preview";

const TeamMember = ({ handleChange, handleImage }) => {
  return (
    <div>
      <Form>
        <h2>Expert Team Member Section</h2>
        <hr />
        <Form.Group>
          <Form.Label>Section Heading</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Main Haeding"
            name="aboutUsTeamMemberHeading"
            onChange={handleChange}
          />
        </Form.Group>
        <hr />
        <Form.Group>
          <div>
            <h3>Person 1 Details</h3>
            <hr />
            <Form.Label>Section Image 1</Form.Label>
            <div className="custom-file">
              <Form.Control
                type="file"
                name="aboutUsTeamMemberImg1"
                className="form-control visibility-hidden"
                id="TeamMemberSection1"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="TeamMemberSection1">
                Upload image
              </label>
              <hr />
            </div>
            <hr />
            {/* <div>{image ? <Preview file={image} /> : "No Image"}</div> */}
          </div>
          <hr />
          <div>
            <Form.Label>Person 1 Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="aboutUsTeamMemberPersonName_1"
              onChange={handleChange}
            />
            <hr />
            <Form.Label>Person 1 Role</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Role"
              name="aboutUsTeamMemberPersonRole_1"
              onChange={handleChange}
            />
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <div>
            <h3>Person 2 Details</h3>
            <hr />
            <Form.Label>Section Image 2</Form.Label>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control visibility-hidden"
                name="aboutUsTeamMemberImg2"
                id="TeamMemberSection2"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="TeamMemberSection2">
                Upload image
              </label>
              <hr />
            </div>
            <hr />
            {/* <div>{image ? <Preview file={image} /> : "No Image"}</div> */}
            <hr />
            <div>
              <Form.Label>Person 2 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="aboutUsTeamMemberPersonName_2"
                onChange={handleChange}
              />
              <hr />
              <Form.Label>Person 2 Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Role"
                name="aboutUsTeamMemberPersonRole_2"
                onChange={handleChange}
              />
            </div>
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <div>
            <h3>Person 3 Details</h3>
            <hr />
            <Form.Label>Section Image 3</Form.Label>
            <div className="custom-file">
              <Form.Control
                type="file"
                name="aboutUsTeamMemberImg3"
                className="form-control visibility-hidden"
                id="TeamMemberSection3"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="TeamMemberSection3">
                Upload image
              </label>
              <hr />
            </div>
            <hr />
            {/* <div>{image ? <Preview file={image} /> : "No Image"}</div> */}
            <hr />
            <div>
              <Form.Label>Person 3 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="aboutUsTeamMemberPersonName_3"
                onChange={handleChange}
              />
              <hr />
              <Form.Label>Person 3 Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Role"
                name="aboutUsTeamMemberPersonRole_3"
                onChange={handleChange}
              />
            </div>
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <div>
            <h3>Person 4 Details</h3>
            <hr />
            <Form.Label>Section Image 4</Form.Label>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control visibility-hidden"
                id="TeamMemberSection4"
                name="aboutUsTeamMemberImg4"
                onChange={handleImage}
              />
              <label className="custom-file-label" htmlFor="TeamMemberSection4">
                Upload image
              </label>
              <hr />
            </div>
            <hr />
            {/* <div>{image ? <Preview file={image} /> : "No Image"}</div> */}
            <hr />
            <div>
              <Form.Label>Person 4 Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="aboutUsTeamMemberPersonName_4"
                onChange={handleChange}
              />
              <hr />
              <Form.Label>Person 4 Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Role"
                name="aboutUsTeamMemberPersonRole_4"
                onChange={handleChange}
              />
            </div>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default TeamMember;
