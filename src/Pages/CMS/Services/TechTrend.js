import React from "react";
import FormInput from "../../../Components/FormInput";

const TechTrend = ({ handleImage, handleChange }) => {
  return (
    <div>
      <h2>Improve And Innovate with The Tech Trend Section</h2>
      <hr />
      <div>
        <hr />
        <h3>Logo 1</h3>
        <hr />
        <FormInput
          type="title"
          label="Logo Title"
          name="techTrendLogoTitle_1"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="file"
          label="Logo Image"
          name="techTrendImg_1"
          onChange={handleImage}
        />
        <hr />
        <FormInput
          type="title"
          label="Button Title"
          name="buttonTitle_1"
          onChange={handleChange}
        />
      </div>
      <hr />
      <div>
        <h3>Logo 2</h3>
        <hr />
        <FormInput
          type="title"
          label="Logo Title"
          name="techTrendLogoTitle_2"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="file"
          label="Logo Image"
          name="techTrendImg_2"
          onChange={handleImage}
        />
        <hr />
        <FormInput
          type="title"
          label="Button Title"
          name="buttonTitle_2"
          onChange={handleChange}
        />
      </div>
      <hr />
      <div>
        <h3>Logo 3</h3>
        <hr />
        <FormInput
          type="title"
          label="Logo Title"
          name="techTrendLogoTitle_3"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="file"
          label="Logo Image"
          name="techTrendImg_3"
          onChange={handleImage}
        />
        <hr />
        <FormInput
          type="title"
          label="Button Title"
          name="buttonTitle_3"
          onChange={handleChange}
        />
      </div>
      <hr />
      <div>
        <h3>Logo 4</h3>
        <hr />
        <FormInput
          type="title"
          label="Logo Title"
          name="techTrendLogoTitle_4"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="file"
          label="Logo Image"
          name="techTrendImg_4"
          onChange={handleImage}
        />
        <hr />
        <FormInput
          type="title"
          label="Button Title"
          name="buttonTitle_4"
          onChange={handleChange}
        />
      </div>
      <hr />
      <div>
        <h3>Logo 5</h3>
        <hr />
        <FormInput
          type="title"
          label="Logo Title"
          name="techTrendLogoTitle_5"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="file"
          label="Logo Image"
          name="techTrendImg_5"
          onChange={handleImage}
        />
        <hr />
        <FormInput
          type="title"
          label="Button Title"
          name="buttonTitle_5"
          onChange={handleChange}
        />
      </div>
      <hr />
      <div>
        <h3>Logo 6</h3>
        <hr />
        <FormInput
          type="title"
          label="Logo Title"
          name="techTrendLogoTitle_6"
          onChange={handleChange}
        />
        <hr />
        <FormInput
          type="file"
          label="Logo Image"
          name="techTrendImg_6"
          onChange={handleImage}
        />
        <hr />
        <FormInput
          type="title"
          label="Button Title"
          name="buttonTitle_6"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TechTrend;
