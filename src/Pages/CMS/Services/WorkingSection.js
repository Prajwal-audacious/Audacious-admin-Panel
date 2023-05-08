import React from "react";
import FormInput from "../../../Components/FormInput";

const WorkingSection = ({
  handleCkeditorValues,
  handleChange,
  handleImage,
}) => {
  return (
    <div>
      <hr />
      <h2>Working Process For Our Company</h2>
      <hr />
      <FormInput
        type="heading"
        label="Sectiton Main Heading"
        name="serviceWorkingHeading"
        onChange={handleChange}
      />
      <hr />
      <div>
        <h3>Development</h3>
        <hr />
        <FormInput
          type="file"
          label="Section Image 1"
          name="serviceWorkingImg_1"
          onChange={handleImage}
        />
        <hr />
        <FormInput
          type="title"
          label="Sub Heading 1"
          name="serviceWorkingTitle_1"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="editor"
          label="Section Discription 1"
          onChange={(event, editor) => {
            handleCkeditorValues(event, editor, "WorkingSectionDescription_1");
          }}
        />
      </div>
      <hr />
      <div>
        <h3>Testing</h3>
        <hr />
        <FormInput
          type="file"
          label="Section Image 2"
          name="serviceWorkingImg_2"
          onChange={handleImage}
        />
        <hr />
        <FormInput
          type="title"
          label="Sub Heading 2"
          name="serviceWorkingTitle_2"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="editor"
          label="Section Discription 2"
          onChange={(event, editor) => {
            handleCkeditorValues(event, editor, "WorkingSectionDescription_2");
          }}
        />
      </div>
      <hr />
      <div>
        <h3>Business Consultation</h3>
        <hr />
        <FormInput
          type="file"
          label="Section Image 3"
          name="serviceWorkingImg_3"
          onChange={handleImage}
        />
        <hr />
        <FormInput
          type="title"
          label="Sub Heading 3"
          name="serviceWorkingTitle_3"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="editor"
          label="Section Discription 3"
          onChange={(event, editor) => {
            handleCkeditorValues(event, editor, "WorkingSectionDescription_3");
          }}
        />
      </div>
    </div>
  );
};

export default WorkingSection;
