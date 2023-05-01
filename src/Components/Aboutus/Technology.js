import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import CKeditor from "../Editor";
import Preview from "../Preview";
import axios from "axios";

const Technology = ({ handleChange, handleCkeditorValues, handleImage }) => {
  const [b, setB] = useState();
  const a = {
    data: "<p>example<h1>data</h1>data</p>",
  };

  const api = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/home", {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYyZmNjYTFmM2EzNDFhODZkZmFjZTgyNyIsImZpcnN0TmFtZSI6IlN1bmlsIiwibGFzdE5hbWUiOiJZYWRhdiIsImVtYWlsIjoic3VuaWwueWFkYXZAYXVkYWNpb3VzdGVjaG5vbG9naWVzLmNvbSIsInVzZXJUeXBlIjoic3VwZXJBZG1pbiIsInBhc3N3b3JkIjoiJDJiJDEwJFdlRlBrdVdseHczRk5lM2liVnJuNHVMQmJRYm94U1pteU5KMm9wV3dqZ2ZGc2hwWHBOVk5tIiwic3RhdHVzIjoiYWN0aXZlIiwiaXNBY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjItMDgtMTdUMTA6NTk6NDMuNjg4WiIsInVwZGF0ZWRBdCI6IjIwMjItMDgtMTdUMTA6NTk6NDMuNjg4WiIsIl9fdiI6MH0sImlhdCI6MTY4MjQwMTUxMCwiZXhwIjoxNzEzOTM3NTEwfQ.0xsiHMqVGmjWHkipXza_jiHepjnR9v0LlLwWO4fPz_M`,
        },
      });
      console.log(data);
      setB(data.result.development.developmentDescription);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div>
      <Form>
        <h2>Welcome To the World of Innovation & Technology Section</h2>
        <hr />
        <Form.Group>
          <div>
            <Form.Label>Section Heading</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Heading"
              name="technology_Heading"
              onChange={handleChange}
            />
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <div>
            <Form.Label>Section Sub Description</Form.Label>
            <CKeditor
              data={b}
              onChange={(event, editor) => {
                handleCkeditorValues(event, editor, "technologySubDescription");
              }}
            />
          </div>
        </Form.Group>
        <hr />
        <Form.Group>
          <div>
            <Form.Label>Section Main Description</Form.Label>
            <CKeditor
              onChange={(event, editor) => {
                handleCkeditorValues(
                  event,
                  editor,
                  "technologyMainDescription"
                );
              }}
            />
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
              name="aboutUsTechnologyImg"
              onChange={handleImage}
            />
            <label className="custom-file-label" htmlFor="technologySection">
              Upload image
            </label>
          </div>
          <hr />
          {/* <div>{imgInput ? <Preview file={imgInput} /> : "No Image"}</div> */}
        </Form.Group>
        <Form.Group>
          <div>
            <Form.Label>Project Successful Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Title"
              name="project_successful_title"
              onChange={handleChange}
            />
            <hr />
            <Form.Label>Project Successful Count</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Your Title"
              name="project_successful_count"
              onChange={handleChange}
            />
          </div>
          <hr />
          <div>
            <Form.Label>Satisfied Client Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Title"
              name="satisfied_client_title"
              onChange={handleChange}
            />
            <hr />
            <Form.Label>Satisfied Client Count</Form.Label>
            <Form.Control
              type="number"
              placeholder="Count"
              name="satisfied_client_count"
              onChange={handleChange}
            />
          </div>
          <hr />
          <div>
            <Form.Label>Team Member Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Title"
              name="team_member_title"
              onChange={handleChange}
            />
            <hr />
            <Form.Label>Team Member Count</Form.Label>
            <Form.Control
              type="number"
              placeholder="Count"
              name="team_member_count"
              onChange={handleChange}
            />
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Technology;
