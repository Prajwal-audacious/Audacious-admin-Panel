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
        name="serviceBannerHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Banner Tittle"
        name="serviceBannerTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="file"
        label="Banner Image"
        name="servicesBannerImg"
        onChange={handleImage}
      />
    </div>
  );
};

export default Banner;
