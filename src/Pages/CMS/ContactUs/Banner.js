import React from "react";
import FormInput from "../../../Components/FormInput";

const Banner = ({ handleChange, handleImage }) => {
  return (
    <div>
      <h2>Contact Us Banner</h2>
      <hr />
      <FormInput
        type="heading"
        label="Banner Main Heading"
        name="contactUsBannerHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="file"
        label="Banner Image"
        name="contactUsBannerImg"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="title"
        label="Banner Title"
        name="contactUsBannerTitle"
        onChange={handleChange}
      />
    </div>
  );
};

export default Banner;
