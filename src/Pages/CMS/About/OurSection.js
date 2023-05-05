import React from "react";
import FormInput from "../../../Components/FormInput";

const OurSection = ({ handleChange, handleCkeditorValues, handleImage }) => {
  return (
    <div>
      <h2>Our Section</h2>
      <hr />
      <FormInput
        type="heading"
        label="Our Section Main Heading"
        name="aboutUsOurSectionHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Our Section Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "ourSectionDescription");
        }}
      />
      <hr />
      <h3>Mission And Vision</h3>
      <hr />
      <FormInput
        type="title"
        label="Our Mission Title"
        name="AboutUsOurMissionTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Our Mission Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "ourMissionDescription");
        }}
      />
      <hr />
      <FormInput
        type="file"
        label="Our Mission Image"
        name="aboutUsOurSectionMissionImg1"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="title"
        label="Our Vision Title"
        name="AboutUsOurVisionTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Our Vision Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "ourVisionDescription");
        }}
      />
      <hr />
      <FormInput
        type="file"
        label="Our Vision Image"
        name="aboutUsOurSectionVisionImg2"
        onChange={handleImage}
      />
    </div>
  );
};

export default OurSection;
