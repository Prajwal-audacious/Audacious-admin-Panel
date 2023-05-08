import React from "react";
import FormInput from "../../../Components/FormInput";

const CmsDev = ({ handleCkeditorValues, handleImage, handleChange }) => {
  return (
    <div>
      <h2>CMS Development</h2>
      <hr />
      <FormInput
        type="heading"
        label="Section Main Heading"
        name="cmsDevMainHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Section Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "cmsDevDescription");
        }}
      />
      <hr />
      <FormInput
        type="file"
        label="Section Image"
        name="cmsDevImg  "
        onChange={handleImage}
      />
      <hr />
      <h3>Section Titles</h3>
      <hr />
      <FormInput
        type="title"
        label="Title 1"
        name="cmsDevTitle_1"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 2"
        name="cmsDevTitle_2"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 3"
        name="cmsDevTitle_3"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 4"
        name="cmsDevTitle_4"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 5"
        name="cmsDevTitle_5"
        onChange={handleChange}
      />
    </div>
  );
};

export default CmsDev;
