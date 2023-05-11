import React, { useState } from "react";
import CustomForm from "../../../Components/CustomForm";
import Card from "../../../Components/Card";
import Banner from "./Banner";
import Founders from "./Founders";

const ContactUs = () => {
  const [inputData, setInputData] = useState({});
  const [ckeditorData, setCkeditorData] = useState({});
  const [imageData, setImageData] = useState({});

  const handleImage = ({ target: { name, files } }) => {
    setImageData({ ...imageData, [name]: files[0] });
  };

  const handleChange = ({ target: { name, value } }) => {
    setInputData({ ...inputData, [name]: value });
  };
  const handleCkeditorValues = (event, editor, name) => {
    setCkeditorData({ ...ckeditorData, [name]: editor.getData() });
  };
  console.log(ckeditorData);
  console.log(inputData);
  console.log(imageData);

  const submitBtn = () => {
    console.log("djkawn");
  };
  return (
    <CustomForm onSubmit={submitBtn}>
      <div className="row">
        <Card>
          <Banner handleImage={handleImage} handleChange={handleChange} />
        </Card>
        <Card>
          <Founders
            handleCkeditorValues={handleCkeditorValues}
            handleImage={handleImage}
            handleChange={handleChange}
          />
        </Card>
      </div>
    </CustomForm>
  );
};

export default ContactUs;
