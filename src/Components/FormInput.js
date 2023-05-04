import React from "react";
import { Form } from "react-bootstrap";
import CKeditor from "./Editor";
import Preview from "./Preview";

const FormInput = ({ type, Label, name, onChange }) => {
  return (
    <>
      <Form>
        <div>
          {type === "Heading" && (
            <Form.Group>
              <Form.Label>{Label}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter The Heading"
                name={name}
                onChange={onChange}
              />
            </Form.Group>
          )}
        </div>
        <div>
          {type === "Title" && (
            <Form.Group>
              <Form.Label>{Label}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter The Title"
                name={name}
                onChange={onChange}
              />
            </Form.Group>
          )}
        </div>

        <div>
          {type === "editor" && (
            <Form.Group>
              <Form.Label>{Label}</Form.Label>
              <CKeditor onChange={onChange} />
            </Form.Group>
          )}
        </div>
        <div>
          {type === "file" && (
            <Form.Group>
              <Form.Label>{Label}</Form.Label>
              <div>
                <div className="custom-file">
                  <Form.Control
                    type="file"
                    className="form-control visibility-hidden"
                    id={name}
                    name={name}
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
          )}
        </div>
      </Form>
    </>
  );
};

export default FormInput;
