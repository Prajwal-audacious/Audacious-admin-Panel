import React from "react";
import FormInput from "../../../Components/FormInput";

const WebDesign = ({ handleCkeditorValues, handleImage, handleChange }) => {
  return (
    <div>
      <h2>Web Design Section</h2>
      <hr />
      <FormInput
        type="heading"
        label="Web Design Main Heading"
        name="webDesignMainHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Web Design Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "webDesignDescription");
        }}
      />
      <hr />
      <FormInput
        type="file"
        label="Section Image"
        name="WebDesignImg"
        onChange={handleImage}
      />
      <hr />
      <h3>Section Titles</h3>
      <hr />
      <FormInput
        type="title"
        label="Title 1"
        name="webDesignTitle_1"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 2"
        name="webDesignTitle_2"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 3"
        name="webDesignTitle_3"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 4"
        name="webDesignTitle_4"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 5"
        name="webDesignTitle_5"
        onChange={handleChange}
      />
    </div>
  );
};

export default WebDesign;
