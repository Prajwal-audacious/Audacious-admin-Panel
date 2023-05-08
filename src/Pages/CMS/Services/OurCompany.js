import React from "react";
import FormInput from "../../../Components/FormInput";

const OurCompany = ({ handleCkeditorValues, handleImage, handleChange }) => {
  return (
    <div>
      <h2>Our Company Services Section</h2>
      <hr />
      <FormInput
        type="heading"
        label="Section Main Heading"
        name="ourCompanyMainHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="file"
        label="Our Company Image"
        name="OurCompanyImg"
        onChange={handleImage}
      />
      <hr />
      <FormInput
        type="title"
        label="Enter the Sub Heading"
        name="ourCompanyMainSubHeading"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Section Description"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "ourCompanyDescription");
        }}
      />
      <hr />
      <h3>Our Company Titles</h3>
      <hr />
      <FormInput
        type="title"
        label="Title 1"
        name="ourCompanyTitle_1"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 2"
        name="ourCompanyTitle_2"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 3"
        name="ourCompanyTitle_3"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 4"
        name="ourCompanyTitle_4"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="title"
        label="Title 5"
        name="ourCompanyTitle_5"
        onChange={handleChange}
      />
    </div>
  );
};

export default OurCompany;
