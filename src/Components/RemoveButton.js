import React from "react";
import { Button } from "react-bootstrap";

const RemoveButton = ({removeFormFields}) => {
  return (
    <Button
      variant="danger"
      type="button"
      onClick={removeFormFields}
      style={{margin:'5px'}}
    >
      Remove
    </Button>
  );
};

export default RemoveButton;
