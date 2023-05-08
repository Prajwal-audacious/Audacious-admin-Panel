import React from "react";
import FormInput from "../../../Components/FormInput";

const SoftwareDev = ({ handleCkeditorValues, handleImage, handleChange }) => {
  return (
    <div>
      <h2>Software Development Section</h2>
      <hr />
      <FormInput
        type="heading"
        label="Section Main Heading"
        name="softwareDevMainHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Section Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "softwareDevDescription");
        }}
      />
      <hr />
      <FormInput
        type="file"
        label="Section Image"
        name="softwareDevImg"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 1"
        name="softwareDevTitle_1"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 2"
        name="softwareDevTitle_2"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 3"
        name="softwareDevTitle_3"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 4"
        name="softwareDevTitle_4"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 5"
        name="softwareDevTitle_5"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 6"
        name="softwareDevTitle_6"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 7"
        name="softwareDevTitle_7"
        onChange={handleChange}
      />
    </div>
  );
};

export default SoftwareDev;
