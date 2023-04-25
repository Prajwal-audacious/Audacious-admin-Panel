import React from "react";
import { Form } from "react-bootstrap";

const TeamMember = () => {
  return (
    <div>
      <Form>
        <h2>Expert Team Member Section</h2>
        <hr />
        <Form.Group>
          <Form.Label>Section Heading</Form.Label>
          <Form.Control type="text" placeholder="Enter Main Haeding" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default TeamMember;
