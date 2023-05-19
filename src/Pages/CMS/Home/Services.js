import React from "react";
import FormInput from "../../../Components/FormInput";

const Services = ({ handleChange, handleImage, handleCkeditorValues }) => {
  return (
    <div>
      <h2>Service Section</h2>
      <hr />
      <FormInput
        type="title"
        label="Service Title"
        name="homeServiceTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="heading"
        label="Section Main Heading "
        name="homeServiceMainHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Sub Title 1"
        name="homeServiceSubTitle_1"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Description 1"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "homeServiceDescription_1");
        }}
      />
      <hr />
      <FormInput
        type="title"
        label="Sub Title 2"
        name="homeServiceSubTitle_2"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Description 2"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "homeServiceDescription_2");
        }}
      />
      <hr />
      <FormInput
        type="title"
        label="Button Title"
        name="homeServiceBtnTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="file"
        label="Section Image"
        name="homeServiceImg"
        onChange={handleImage}
      />
    </div>
  );
};

export default Services;
