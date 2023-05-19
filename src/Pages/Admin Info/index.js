import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import adminImg from "../../assets/images/businessman-character-avatar-isolated/60111.jpg";

const AdminInfo = () => {
  const [inputData, setInputData] = useState();

  const handleInput = ({ target: { name, value, files } }) => {
    if (value) {
      setInputData({ ...inputData, [name]: value });
    }
    if (files) {
      setInputData({ ...inputData, [name]: files[0] });
    }
  };

  console.log(inputData);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="row">
      <div className="col-xl-4 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h2>Admin Details</h2>
            <hr />
            <div className="adminImgCon">
              <Image
                src={adminImg}
                alt="Admin Img"
                height={250}
                className="adminImg"
              />
            </div>
            <hr />
            <div>
              <h4>
                Admin Name:{" "}
                <span className="badge badge_custom badge-outline-success">
                  Prajwal Ramanwal
                </span>
              </h4>
              <h4>
                Email:{" "}
                <span className="badge badge_custom badge-outline-success">
                  ramanwalprajwal1@gmail.com
                </span>
              </h4>
              <h4>
                Contact No:{" "}
                <span className="badge badge_custom badge-outline-success">
                  9685358775
                </span>
              </h4>
              <h4>
                Username:{" "}
                <span className="badge badge_custom badge-outline-success">
                  Prjwal@123
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-8 col-sm-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h2>Reset Admin Details</h2>
            <hr />
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Admin Name</Form.Label>
                <Form.Control
                  type="text"
                  name="adminInfoName"
                  placeholder="Enter Full Name"
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Admin Username</Form.Label>
                <Form.Control
                  type="text"
                  name="adminInfoUsername"
                  placeholder="Enter Username"
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Admin Email</Form.Label>
                <Form.Control
                  type="email"
                  name="adminInfoEmail"
                  placeholder="Enter Email"
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Admin Contact no</Form.Label>
                <Form.Control
                  type="number"
                  name="adminInfoPhoneNo"
                  placeholder="Enter Number"
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Admin Password</Form.Label>
                <Form.Control
                  type="password"
                  name="adminInfoPassword"
                  placeholder="Enter Password"
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Admin Profile Photo</Form.Label>
                <div className="custom-file">
                  <Form.Control
                    type="file"
                    className="form-control visibility-hidden"
                    id="adminInfoProfilePhoto"
                    name="adminInfoProfilePhoto"
                    onChange={handleInput}
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="adminInfoProfilePhoto"
                  >
                    Upload image
                  </label>
                </div>
              </Form.Group>
              <Button type="submit">Save</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInfo;
