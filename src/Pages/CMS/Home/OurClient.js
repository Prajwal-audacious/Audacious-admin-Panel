import React from "react";
import FormInput from "../../../Components/FormInput";

const OurClient = ({ handleChange, handleImage, handleCkeditorValues }) => {
  return (
    <div>
      <h2>Our Client Section</h2>
      <hr />
      <FormInput
        type="title"
        label="Why Partner With Us Title"
        name="homeOurClientHeadingQue"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="heading"
        label="Section Main Heading"
        name="homeOurClientMainHeading"
        onChange={handleChange}
      />
      <hr />
      <div>
        <h3>Client 1 Details</h3>
        <hr />
        <FormInput
          type="file"
          label="Client 1 Image"
          name="homeOurClientImg_1"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="editor"
          label="Client 1 Testimonial"
          onChange={(event, editor) => {
            handleCkeditorValues(event, editor, "homeOurClientDescription_1");
          }}
        />
        <hr />
        <FormInput
          type="title"
          label="Client Name"
          name="homeOurClientName_1"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="title"
          label="Client Role"
          name="homeOurClientRole_1"
          onChange={handleChange}
        />
      </div>
      <hr />
      <div>
        <h3>Client 2 Details</h3>
        <hr />
        <FormInput
          type="file"
          label="Client 2 Image"
          name="homeOurClientImg_2"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="editor"
          label="Client 2 Testimonial"
          onChange={(event, editor) => {
            handleCkeditorValues(event, editor, "homeOurClientDescription_2");
          }}
        />
        <hr />
        <FormInput
          type="title"
          label="Client Name"
          name="homeOurClientName_2"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="title"
          label="Client Role"
          name="homeOurClientRole_2"
          onChange={handleChange}
        />
      </div>
      <hr />
      <div>
        <h3>Client 3 Details</h3>
        <hr />
        <FormInput
          type="file"
          label="Client 3 Image"
          name="homeOurClientImg_3"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="editor"
          label="Client 3 Testimonial"
          onChange={(event, editor) => {
            handleCkeditorValues(event, editor, "homeOurClientDescription_3");
          }}
        />
        <hr />
        <FormInput
          type="title"
          label="Client Name"
          name="homeOurClientName_3"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="title"
          label="Client Role"
          name="homeOurClientRole_3"
          onChange={handleChange}
        />
      </div>


    </div>
  );
};

export default OurClient;
