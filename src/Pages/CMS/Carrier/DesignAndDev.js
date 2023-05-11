import React from "react";
import FormInput from "../../../Components/FormInput";

const DesignAndDev = ({ handleChange, handleImage }) => {
  return (
    <div>
      <h2>Design And Development Section</h2>
      <hr />
      <FormInput
        type="heading"
        label="Design and Development Main Heading"
        name="designAndDevMainHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="file"
        label="Section Image"
        name="designAndDevImg"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="heading"
        label="Section Sub heading"
        name="designAndDevSubHeading"
        onChange={handleImage}
      />
    </div>
  );
};

export default DesignAndDev;
