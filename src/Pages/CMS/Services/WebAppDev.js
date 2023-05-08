import React from "react";
import FormInput from "../../../Components/FormInput";

const WebAppDev = ({ handleCkeditorValues, handleImage, handleChange }) => {
  return (
    <div>
      <h2>Web App Development Section</h2>
      <hr />
      <FormInput
        type="heading"
        label="Section Main Heading"
        name="webAppDevMainHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Section Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "webAppDevDescription");
        }}
      />
      <hr />
      <FormInput
        type="file"
        label="Section Image"
        name="webAppDevImg"
        onChange={handleImage}
      />
      <hr />
      <h3>Section Titles</h3>
      <hr />
      <FormInput
        type="title"
        label="Title 1"
        name="webAppDevTitle_1"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 2"
        name="webAppDevTitle_2"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 3"
        name="webAppDevTitle_3"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 4"
        name="webAppDevTitle_4"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 5"
        name="webAppDevTitle_5"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 6"
        name="webAppDevTitle_6"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 7"
        name="webAppDevTitle_7"
        onChange={handleChange}
      />
    </div>
  );
};

export default WebAppDev;
