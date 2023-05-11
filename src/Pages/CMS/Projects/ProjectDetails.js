import React from "react";
import FormInput from "../../../Components/FormInput";

const ProjectDetails = ({
  handleChange,
  handleImage,
  handleCkeditorValues,
}) => {
  return (
    <div>
      <h2>Projects Details And Case Studies</h2>
      <hr />
      <FormInput
        type="heading"
        label="Section Main Heading"
        name="projectDetailsHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="file"
        label="Section Image"
        name="projectDetailsImg"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="title"
        label="Wellcome Writearn Title"
        name="WelcomeTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Wellcome Writearn Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "WelcomeDescription");
        }}
      />
      <hr />
      <FormInput
        type="title"
        label="Development Title"
        name="developmentTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Development Sub Title"
        name="developmentSubTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Development Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "DevelopmentDescription");
        }}
      />
      <hr />
      <FormInput
        type="title"
        label="Technology Satck Title"
        name="technologyStackTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Technology Satck Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "technologyStackDescription");
        }}
      />
      <hr />
      <FormInput
        type="editor"
        label="Technology Satck Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "technologyStackDescription");
        }}
      />
      <hr />
      <FormInput
        type="title"
        label="What You Need to Do Title"
        name="whatYouNeedToDoTitle"
        onChange={handleChange}
      />
      <FormInput
        type="editor"
        label="What You Need To Do Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "whatYouNeedToDoDescription");
        }}
      />
      <hr />
      <FormInput
        type="title"
        label="Have A Look On Website Title"
        name="haveALookTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Website Link"
        name="haveALookLink"
        onchange={handleChange}
      />
    </div>
  );
};

export default ProjectDetails;
