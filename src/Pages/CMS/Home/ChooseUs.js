import React from "react";
import FormInput from "../../../Components/FormInput";

const ChooseUs = ({ handleChange, handleImage, handleCkeditorValues }) => {
  return (
    <div>
      <h2>Choose Us Section</h2>
      <hr />
      <FormInput
        type="title"
        label="Why Choose Us Title"
        name="homeChooseusHeadingQue"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="heading"
        label="Section Main Heading"
        name="homeChooseusMainHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Collect Ideas Title"
        name="homeChooseUsTitle_1"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Description 1"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "homeChooseusDescription_1");
        }}
      />
      <hr />
      <FormInput
        type="title"
        label="Data Analysis Title"
        name="homeChooseUsTitle_2"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Description 2"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "homeChooseusDescription_2");
        }}
      />
      <hr />
      <FormInput
        type="title"
        label="Finalize Product Title"
        name="homeChooseUsTitle_3"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Description 3"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "homeDigitalDiscription_3");
        }}
      />
    </div>
  );
};

export default ChooseUs;
