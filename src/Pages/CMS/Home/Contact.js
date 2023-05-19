import React from "react";
import FormInput from "../../../Components/FormInput";

const Contact = ({ handleChange, handleImage, handleCkeditorValues }) => {
  return (
    <div>
      <h2>Contact Us Section</h2>
      <hr />
      <FormInput
        type="title"
        label="Contact Us Title"
        name="homeContactMainTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="heading"
        label="Section Main Heading"
        name="homeContactMainHeading_1"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="file"
        label="Section Image"
        name="homeContactImg"
        onChange={handleChange}
      />
      <hr />
      <h3>Kick Start Section</h3>
      <hr />
      <FormInput
        type="title"
        label="Get In Touch Title"
        name="homeContactTitle"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="heading"
        label="Section Heading"
        name="homeContactMainHeading_1"
        onChange={handleChange}
      />
      <hr />
      <FormInput
        type="editor"
        label="Section Discription"
        onChange={(event, editor) => {
          handleCkeditorValues(event, editor, "homeContactDescription");
        }}
      />
      <hr />
      <FormInput
        type="title"
        label="Button Title"
        name="homeContactBtnTitle"
        onChange={handleChange}
      />
    </div>
  );
};

export default Contact;
