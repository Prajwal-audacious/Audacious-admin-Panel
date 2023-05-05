import React, { useEffect, useState } from "react";
import FormInput from "../../../Components/FormInput";

const Technology = ({ handleChange, handleCkeditorValues, handleImage }) => {
  return (
    <div>
      <h2>Welcome To the World of Innovation & Technology Section</h2>
      <hr />
      <FormInput
        type="heading"
        label="Section Main Heading"
        name="AboutTechnologyMainHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Section Sub Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "technologySubDescription");
        }}
      />
      <hr />
      <FormInput
        type="editor"
        label="Section Main Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "technologyMainDescription");
        }}
      />
      <FormInput
        type="file"
        label="Section Image"
        name="aboutUsTechnologyImg"
        onChange={handleImage}
      />
      <hr />

      <FormInput
        type="title"
        label="Project Successful Title"
        name="projectSuccessfulTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="number"
        label="Project Successful Count"
        name="projectSuccessfulCount"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Satisfied Client Title"
        name="satisfiedClientTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="number"
        label="Satisfied Client Count"
        name="satisfiedClientCount"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Team Member Title"
        name="teamMemberTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="number"
        label="Team Member Count"
        name="teamMemberCount"
        onChange={handleChange}
      />
    </div>
  );
};

export default Technology;
