import React from "react";
import FormInput from "../../../Components/FormInput";

const Banner = ({ handleChange, handleImage }) => {
  return (
    <div>
      <h2>Banner Section</h2>
      <hr />
      <FormInput
        type="heading"
        label="Banner Heading"
        name="homeBannerHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="heading"
        label="Sub Heading"
        name="homeBannerSubHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Button Title"
        name="homeBannerBtnTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="file"
        label="Background Image"
        name="homeBannerBgImage"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="file"
        label="Main Image"
        name="homeBannerMainImage"
        onChange={handleImage}
      />
    </div>
  );
};

export default Banner;
