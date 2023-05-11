import React from "react";
import FormInput from "../../../Components/FormInput";

const Opportunity = ({ handleChange, handleImage, handleCkeditorValues }) => {
  return (
    <div>
      <h2>Explore Opportunities</h2>
      <hr />
      <FormInput
        type="heading"
        label="Section Main Heading"
        name="oppurtunitySectionHeading"
        onChange={handleChange}
      />
      <hr />
      <div className="card">
        <h3>React Native Developer</h3>
        <hr />
        <FormInput
          type="heading"
          label="Card 1 Heading"
          name="CardMainHeading_1"
          onChange={handleChange}
        />
        <FormInput
          type="editor"
          label="Description Of Role"
          onChange={(event, editor) => {
            handleCkeditorValues(event, editor, "OpportunityRoleDescription_1");
          }}
        />
        <FormInput
          type="title"
          label="More Details Button Heading"
          name="btnTitle_1"
          onChange={handleChange}
        />
      </div>
      <hr />
      <div className="card">
        <h3>Web Design</h3>
        <hr />
        <FormInput
          type="heading"
          label="Card 2 Heading"
          name="CardMainHeading_2"
          onChange={handleChange}
        />
        <FormInput
          type="editor"
          label="Description Of Role"
          onChange={(event, editor) => {
            handleCkeditorValues(event, editor, "OpportunityRoleDescription_2");
          }}
        />
        <FormInput
          type="title"
          label="More Details Button Heading"
          name="btnTitle_2"
          onChange={handleChange}
        />
      </div>
      <hr />
      <div className="card">
        <h3>React Native Developer</h3>
        <hr />
        <FormInput
          type="heading"
          label="Card 3 Heading"
          name="CardMainHeading_3"
          onChange={handleChange}
        />
        <FormInput
          type="editor"
          label="Description Of Role"
          onChange={(event, editor) => {
            handleCkeditorValues(event, editor, "OpportunityRoleDescription_3");
          }}
        />
        <FormInput
          type="title"
          label="More Details Button Heading"
          name="btnTitle_3"
          onChange={handleChange}
        />
      </div>
      <hr />
      <div className="card">
        <h3>Web Design</h3>
        <hr />
        <FormInput
          type="heading"
          label="Card 4 Heading"
          name="CardMainHeading_4"
          onChange={handleChange}
        />
        <FormInput
          type="editor"
          label="Description Of Role"
          onChange={(event, editor) => {
            handleCkeditorValues(event, editor, "OpportunityRoleDescription_4");
          }}
        />
        <FormInput
          type="title"
          label="More Details Button Heading"
          name="btnTitle_4"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Opportunity;
