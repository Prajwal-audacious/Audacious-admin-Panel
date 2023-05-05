import React from "react";
import FormInput from "../../../Components/FormInput";

const TeamMember = ({ handleChange, handleImage }) => {
  return (
    <div>
      <h2>Expert Team Member Section</h2>
      <hr />
      <FormInput
        type="heading"
        label="Section Main Heading"
        name="aboutUsTeamMemberHeading"
        onChange={handleChange}
      />
      <hr />
      <div>
        <h3>Person 1 Details</h3>
        <hr />
        <FormInput
          type="file"
          label="Person 1 Image"
          name="aboutUsTeamMemberImg1"
          onChange={handleImage}
        />
        <hr />
        <FormInput
          type="title"
          label="Person 1 Name"
          name="aboutUsTeamMemberPersonName_1"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="title"
          label="Person 1 Role"
          name="aboutUsTeamMemberPersonRole_1"
          onChange={handleChange}
        />
        <hr />
      </div>
      <div>
        <h3>Person 2 Details</h3>
        <hr />
        <FormInput
          type="file"
          label="Person 2 Image"
          name="aboutUsTeamMemberImg2"
          onChange={handleImage}
        />
        <hr />
        <FormInput
          type="title"
          label="Person 2 Name"
          name="aboutUsTeamMemberPersonName_2"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="title"
          label="Person 1 Role"
          name="aboutUsTeamMemberPersonRole_2"
          onChange={handleChange}
        />
        <hr />
      </div>
      <div>
        <h3>Person 3 Details</h3>
        <hr />
        <FormInput
          type="file"
          label="Person 3 Image"
          name="aboutUsTeamMemberImg3"
          onChange={handleImage}
        />
        <hr />
        <FormInput
          type="title"
          label="Person 3 Name"
          name="aboutUsTeamMemberPersonName_3"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="title"
          label="Person 3 Role"
          name="aboutUsTeamMemberPersonRole_3"
          onChange={handleChange}
        />
        <hr />
      </div>
      <div>
        <h3>Person 4 Details</h3>
        <hr />
        <FormInput
          type="file"
          label="Person 4 Image"
          name="aboutUsTeamMemberImg4"
          onChange={handleImage}
        />
        <hr />
        <FormInput
          type="title"
          label="Person 4 Name"
          name="aboutUsTeamMemberPersonName_4"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="title"
          label="Person 4 Role"
          name="aboutUsTeamMemberPersonRole_4"
          onChange={handleChange}
        />
        <hr />
      </div>
    </div>
  );
};

export default TeamMember;
