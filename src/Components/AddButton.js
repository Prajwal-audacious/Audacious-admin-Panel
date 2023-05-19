import React from "react";
import { Button } from "react-bootstrap";

const AddButton = ({ addFormFields }) => {
  return (
    <Button
      variant="primary"
      type="button"
      onClick={addFormFields}
      style={{ margin: "5px" }}
    >
      Add
    </Button>
  );
};

export default AddButton;
