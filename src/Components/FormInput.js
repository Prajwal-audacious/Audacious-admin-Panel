import React from "react";
import { Button, Form } from "react-bootstrap";
import CKeditor from "./Editor";
import Preview from "./Preview";

const FormInput = ({ type, label, name, onChange, data }) => {
  if (type === "heading") {
    return (
      <>
        <Form.Group>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter The Heading"
            name={name}
            onChange={onChange}
          />
        </Form.Group>
      </>
    );
  }

  if (type === "title") {
    return (
      <>
        <Form.Group>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter The Title"
            name={name}
            onChange={onChange}
          />
        </Form.Group>
      </>
    );
  }
  if (type === "editor") {
    return (
      <>
        <Form.Group>
          <Form.Label>{label}</Form.Label>
          <CKeditor onChange={onChange} data={data} />
        </Form.Group>
      </>
    );
  }

  if (type === "file") {
    return (
      <>
        <Form.Group>
          <Form.Label>{label}</Form.Label>
          <div>
            <div className="custom-file">
              <Form.Control
                type="file"
                className="form-control visibility-hidden"
                id={name}
                name={name}
                multiple
                onChange={onChange}
              />
              <label className="custom-file-label" htmlFor={name}>
                Upload image
              </label>
            </div>
            <hr />
            {/* <div>{image ? <Preview file={image.name} /> : "No Image"}</div> */}
          </div>
        </Form.Group>
      </>
    );
  }

  if (type === "button") {
    return (
      <>
        <Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form.Group>
      </>
    );
  }

  if (type === "number") {
    return (
      <>
        <Form.Group>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter The Count"
            name={name}
            onChange={onChange}
          />
        </Form.Group>
      </>
    );
  } else {
    return <></>;
  }
};

export default FormInput;
