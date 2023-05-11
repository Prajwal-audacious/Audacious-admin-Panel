import React from "react";
import FormInput from "../../../Components/FormInput";

const Banner = ({ handleChange, handleImage }) => {
  return (
    <div>
      <h2>Projects Banner Section</h2>
      <hr />
      <FormInput
        type="heading"
        label="Banner Main Heading"
        name="projectBannerHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="file"
        label="Banner Image"
        name="projectBannerImg"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="title"
        label="Banner Title"
        name="projectBannerTitle"
        onChange={handleChange}
      />
    </div>
  );
};

export default Banner;
