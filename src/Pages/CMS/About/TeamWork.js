import React from "react";
import FormInput from "../../../Components/FormInput";

const TeamWork = ({ handleChange, handleImage }) => {
  return (
    <div>
      <h2>Team Work Section </h2>
      <hr />
      <FormInput
        type="file"
        label="Image 1"
        name="aboutUsTeamWorkImg1"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="file"
        label="Image 2"
        name="aboutUsTeamWorkImg2"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="file"
        label="Image 3"
        name="aboutUsTeamWorkImg3"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="file"
        label="Image 4"
        name="aboutUsTeamWorkImg4"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="file"
        label="Image 5"
        name="aboutUsTeamWorkImg5"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="file"
        label="Image 6"
        name="aboutUsTeamWorkImg6"
        onChange={handleImage}
      />
    </div>
  );
};

export default TeamWork;
