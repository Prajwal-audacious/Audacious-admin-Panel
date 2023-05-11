import React from "react";
import FormInput from "../../../Components/FormInput";

const OurProjects = ({ handleChange, handleImage, handleCkeditorValues }) => {
  return (
    <div>
      <h2>Our Project Section </h2>
      <hr />
      <FormInput
        type="heading"
        label="Our Projects Heading"
        name="ourProjectMainHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="file"
        label="Image 1"
        name="ourProjectImg1"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="file"
        label="Image 2"
        name="ourProjectImg2"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="file"
        label="Image 3"
        name="ourProjectImg3"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="file"
        label="Image 4"
        name="ourProjectImg4"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="file"
        label="Image 5"
        name="ourProjectImg5"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="file"
        label="Image 6"
        name="ourProjectImg6"
        onChange={handleImage}
      />
    </div>
  );
};

export default OurProjects;
