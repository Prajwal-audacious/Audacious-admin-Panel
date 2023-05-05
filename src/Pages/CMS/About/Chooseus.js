import React from "react";
import FormInput from "../../../Components/FormInput";

const Chooseus = ({ handleChange, handleCkeditorValues, handleImage }) => {
  return (
    <div>
      <h2>Why To Go For Audacious Techiegent Section </h2>
      <hr />
      <FormInput
        type="heading"
        label="Section Main Title"
        name="aboutUschooseUsHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="file"
        label="Why To Go Section Image"
        name="aboutUsChooseUsImg"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="heading"
        label="Sub Heading 1"
        name="aboutUsChooseUsSubHeading_1"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Content 1"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "chooseUsContentDescription_1");
        }}
      />
      <hr />
      <FormInput
        type="heading"
        label="Sub Heading 2"
        name="aboutUsChooseUsSubHeading_2"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Content 2"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "chooseUsContentDescription_2");
        }}
      />
      <hr />

      <FormInput
        type="heading"
        label="Sub Heading 3"
        name="aboutUsChooseUsSubHeading_3"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Content 3"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "chooseUsContentDescription_3");
        }}
      />
      <hr />
      <FormInput
        type="heading"
        label="Sub Heading 4"
        name="aboutUsChooseUsSubHeading_4"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Content 4"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "chooseUsContentDescription_4");
        }}
      />
    </div>
  );
};

export default Chooseus;
