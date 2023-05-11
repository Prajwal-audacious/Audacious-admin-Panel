import React from "react";
import FormInput from "../../../Components/FormInput";

const Founders = ({ handleChange, handleImage, handleCkeditorValues }) => {
  return (
    <div>
      <h2>Founders Section</h2>
      <hr />
      <FormInput
        type="file"
        label="Founder Image"
        name="founderImg"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="title"
        label="Founder Name"
        name="founderName"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Founder Role"
        name="founderRole"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Founder Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "founderDescription");
        }}
      />
    </div>
  );
};

export default Founders;
