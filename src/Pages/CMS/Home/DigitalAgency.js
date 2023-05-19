import React from "react";
import FormInput from "../../../Components/FormInput";

const DigitalAgency = ({ handleChange, handleImage, handleCkeditorValues }) => {
  return (
    <div>
      <h2>Creative And Digital Agency Section</h2>
      <hr />
      <FormInput
        type="title"
        label="How It Workes Title"
        name="homeDigitalHeadingQue"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="heading"
        label="Section Main Heading"
        name="homeDigitalMainHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="heading"
        label="Section Sub Heading 1"
        name="homeDigitalSubHeading_1"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Description 1"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "homeDigitalDiscription_1");
        }}
      />
      <hr />
      <FormInput
        type="heading"
        label="Section Sub Heading 2"
        name="homeDigitalSubHeading_2"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Description 1"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "homeDigitalDiscription_2");
        }}
      />
      <hr />
      <FormInput
        type="heading"
        label="Section Sub Heading 3"
        name="homeDigitalSubHeading_3"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Description 1"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "homeDigitalDiscription_3");
        }}
      />
    </div>
  );
};

export default DigitalAgency;
