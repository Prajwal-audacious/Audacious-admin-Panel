import React from "react";
import FormInput from "../../../Components/FormInput";

const Banner = ({ handleChange, handleImage }) => {
  return (
    <div>
      <h2>Banner Section</h2>
      <hr />
      <FormInput
        type="heading"
        label="Banner Main Heading"
        name="carrierBannerHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="file"
        label="Banner Image"
        name="carrierBannerImg"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="title"
        label="Carrier Title"
        name="carrierBannerTitle"
        onChange={handleChange}
      />
    </div>
  );
};

export default Banner;
