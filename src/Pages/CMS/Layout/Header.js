import React from "react";
import FormInput from "../../../Components/FormInput";

const Header = ({ handleImage, handleChange }) => {
  return (
    <div>
      <h2>Header Section</h2>
      <hr />
      <FormInput
        type="file"
        label="Audacious Logo Image"
        name="headerSectionLogo"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="title"
        label="Header Home Title"
        name="headerSectionHomeTitle"
        onChange={handleChange}
      />
      <hr />
        <FormInput
          type="title"
          label="Header About Us Title"
          name="headerSectionAboutUsTitle"
          onChange={handleChange}
        />
        <hr />
      <FormInput
        type="title"
        label="Header Services Title"
        name="headerSectionServiceTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Header Project Title"
        name="headerSectionProjectTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Header Carrier Title"
        name="headerSectionCarrierTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Header Carrier Title"
        name="headerSectionContsctUsTitle"
        onChange={handleChange}
      />
    </div>
  );
};

export default Header;
