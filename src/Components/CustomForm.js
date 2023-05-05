import React from "react";
import { Form } from "react-bootstrap";

const CustomForm = ({ handlSubmit, children, ...props }) => {
  return (
    <Form onSubmit={handlSubmit} {...props}>
      {children}
    </Form>
  );
};

export default CustomForm;
