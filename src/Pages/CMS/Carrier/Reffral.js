import React from "react";
import FormInput from "../../../Components/FormInput";

const Reffral = ({ handleImage, handleChange }) => {
  return (
    <div>
      <h2>Reffral Form</h2>
      <hr />
      <FormInput
        type="heading"
        label="Referral Form Heading"
        name="reffralHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="file"
        label="Referral Section Image"
        name="reffralImg"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="title"
        label="Sumbit Button Title"
        name="reffralBtnTitle"
        onChange={handleChange}
      />
    </div>
  );
};

export default Reffral;
