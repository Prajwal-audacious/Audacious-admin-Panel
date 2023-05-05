import React from "react";
import FormInput from "../../../Components/FormInput";

const WhyChooseUs = ({ handleChange, handleCkeditorValues, handleImage }) => {
  return (
    <div>
      <h2>Why Choose Us Section</h2>
      <hr />
      <FormInput
        type="heading"
        label="Section Main Heading"
        name="chooseUsHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="heading"
        label="Section Sub Heading"
        name="chooseUsSubHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Section Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "WhyChooseUsDescription");
        }}
      />
      <hr />
      <h3>Why To Choose Us Points</h3>
      <hr />
      <FormInput
        type="title"
        label="Point 1"
        name="chooseUsPoint1"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Point 2"
        name="chooseUsPoint2"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Point 3"
        name="chooseUsPoint3"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Point 4"
        name="chooseUsPoint4"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Point 5"
        name="chooseUsPoint5"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Point 6"
        name="chooseUsPoint6"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="file"
        label="Section Image"
        name="whyChooseUsImg"
        onChange={handleImage}
      />
    </div>
  );
};

export default WhyChooseUs;
