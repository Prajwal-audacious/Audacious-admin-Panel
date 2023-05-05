import React from "react";
import FormInput from "../../../Components/FormInput";

const Banner = ({ handleChange, handleImage }) => {
  return (
    <div>
      <h2> About Us Banner Section</h2>
      <hr />
      <FormInput
        type="heading"
        label="About Us Title"
        name="aboutUsBannerHeading"
        onChange={handleChange}
      />
      <FormInput
        type="file"
        label="Banner Image"
        name="aboutUsBannerImg"
        onChange={handleImage}
      />
      <FormInput
        type="title"
        label="Banner Sub Title"
        name="aboutUsBannerTitle"
        onChange={handleChange}
      />
    </div>
  );
};

export default Banner;
