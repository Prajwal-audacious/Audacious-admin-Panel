import React from "react";
import FormInput from "../../../Components/FormInput";

const MobileDev = ({ handleCkeditorValues, handleImage, handleChange }) => {
  return (
    <div>
      <h2>Mobile Development Section</h2>
      <hr />
      <FormInput
        type="heading"
        label="Section Main Heading"
        name="mobileDevMainHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Section Main Heading"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "mobileDevDescription");
        }}
      />
      <hr />
      <FormInput
        type="file"
        label="Section Image"
        name="mobileDevImg"
        onChange={handleImage}
      />
      <hr />
      <h3>Section Titles</h3>
      <hr />
      <FormInput
        type="title"
        label="Title 1"
        name="mobileDevTitle_1"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 2"
        name="mobileDevTitle_2"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 3"
        name="mobileDevTitle_3"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 4"
        name="mobileDevTitle_4"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 5"
        name="mobileDevTitle_5"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 6"
        name="mobileDevTitle_6"
        onChange={handleChange}
      />
    </div>
  );
};

export default MobileDev;
