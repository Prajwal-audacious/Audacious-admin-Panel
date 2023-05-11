import React from "react";
import FormInput from "../../../Components/FormInput";

const Explore = ({ handleChange, handleImage }) => {
  return (
    <div>
      <h2>Explore Section</h2>
      <hr />
      <FormInput
        type="heading"
        label="Explore Section Main Heading"
        name="ExploreMainHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="file"
        label="Section Image"
        name="ExploreSectionImg"
        onChange={handleImage}
      />
    </div>
  );
};

export default Explore;
